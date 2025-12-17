import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { adminDb } from '@/lib/firebase-admin';
import Stripe from 'stripe';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const uid = session.metadata!.userId;
    const customer = session.customer as string;

    await adminDb
      .collection('users')
      .doc(uid)
      .set({ stripeCustomerId: customer }, { merge: true });

    const sub = await stripe.subscriptions.retrieve(session.subscription as string);
    await adminDb.collection('subscriptions').doc(uid).set({
      status: sub.status,
      priceId: sub.items.data[0].price.id,
      currentPeriodEnd: new Date(sub.current_period_end * 1000),
    });
  }

  if (event.type === 'invoice.payment_succeeded') {
    const sub = await stripe.subscriptions.retrieve(
      (event.data.object as Stripe.Invoice).subscription as string
    );
    const uid = (await adminDb
      .collection('users')
      .where('stripeCustomerId', '==', sub.customer)
      .limit(1)
      .get()).docs[0].id;

    await adminDb.collection('subscriptions').doc(uid).update({
      status: sub.status,
      currentPeriodEnd: new Date(sub.current_period_end * 1000),
    });
  }

  return NextResponse.json({ received: true });
}