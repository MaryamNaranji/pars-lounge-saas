import { PricingCards } from '@/components/marketing/PricingCards';

export default function PricingPage() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Choose your plan</h1>
        <PricingCards />
      </div>
    </section>
  );
}