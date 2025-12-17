'use client';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function AccountPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Account</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );

}
