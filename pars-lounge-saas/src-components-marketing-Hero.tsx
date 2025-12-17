import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-brand-100 to-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-900">
          Launch your café website <br /> in minutes
        </h1>
        <p className="mt-6 text-lg text-brand-700">
          White-label SaaS kit for coffee & tea lounges. Payments, subscriptions, and beautiful UI included.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/pricing">
            <Button size="lg">Get started</Button>
          </Link>
          <Link href="#features">
            <Button variant="outline">Learn more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}