import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const userSnap = await adminDb.collection('users').doc(session.user.id).get();
  const customerId = userSnap.data()?.stripeCustomerId;

  if (!customerId)
    return NextResponse.json({ error: 'No subscription found' }, { status: 400 });

  const portal = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${req.headers.get('origin')}/account`,
  });

  return NextResponse.json({ url: portal.url });
}