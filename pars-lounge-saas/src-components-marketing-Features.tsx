export function Features() {
  const items = [
    {
      title: 'Built-in Payments',
      desc: 'Stripe Checkout & Billing—subscriptions, tips, gift cards.',
    },
    {
      title: 'Firebase Backend',
      desc: 'Realtime DB, auth, and serverless APIs—scale effortlessly.',
    },
    {
      title: 'SEO + PWA Ready',
      desc: 'Rank on Google and install like a native app on phones.',
    },
    {
      title: 'Deploy to Vercel',
      desc: 'Push to GitHub and publish worldwide in seconds.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {items.map((i) => (
          <div key={i.title}>
            <h3 className="text-xl font-semibold text-brand-900">{i.title}</h3>
            <p className="mt-2 text-brand-700">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}