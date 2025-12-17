import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { adminDb } from '@/lib/firebase-admin';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) token.uid = account.providerAccountId;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.uid as string;
      return session;
    },
    async signIn({ user }) {
      await adminDb.collection('users').doc(user.id).set(
        { email: user.email, name: user.name, image: user.image },
        { merge: true }
      );
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
});

export { handler as GET, handler as POST };