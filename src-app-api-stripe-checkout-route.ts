import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { priceId } = await req.json();

  const checkout = await stripe.checkout.sessions.create({
    customer_email: session.user.email!,
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${req.headers.get('origin')}/dashboard?success=true`,
    cancel_url: `${req.headers.get('origin')}/pricing?canceled=true`,
    metadata: { userId: session.user.id },
  });

  return NextResponse.json({ url: checkout.url });
}