'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function WaitList() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = async () => {
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setDone(true);
  };

  return (
    <section id="waitlist" className="py-24 bg-brand-100">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Join the wait-list</h2>
        <p className="mt-2 text-brand-700">Get early access and 50% off for life.</p>
        {!done ? (
          <div className="mt-6 flex gap-2">
            <Input
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={submit}>Join</Button>
          </div>
        ) : (
          <p className="mt-6 text-green-700 font-medium">Thanks — we’ll be in touch!</p>
        )}
      </div>
    </section>
  );
}