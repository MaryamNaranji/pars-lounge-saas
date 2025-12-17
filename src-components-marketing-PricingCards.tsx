'use client';
import { Button } from '@/components/ui/Button';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function PricingCards() {
  const { data } = useSession();

  const handle = async (priceId: string) => {
    if (!data) return alert('Please sign in first');
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const { url } = await res.json();
    window.location.assign(url);
  };

  const tiers = [
    {
      name: 'Starter',
      price: '$9/mo',
      desc: 'Perfect for a single café location.',
      priceId: 'price_1MO...', // ← replace with real ID
    },
    {
      name: 'Growth',
      price: '$29/mo',
      desc: 'Multi-location support + analytics.',
      priceId: 'price_1MP...',
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      desc: 'White-label, custom domain, priority support.',
      priceId: 'price_1MQ...',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div key={t.name} className="border border-brand-200 rounded-lg p-6 flex flex-col">
          <h3 className="text-lg font-bold">{t.name}</h3>
          <p className="mt-1 text-brand-700">{t.desc}</p>
          <div className="mt-4 text-3xl font-extrabold">{t.price}</div>
          <Button onClick={() => handle(t.priceId)} className="mt-6 w-full">
            Subscribe
          </Button>
        </div>
      ))}
    </div>
  );
}