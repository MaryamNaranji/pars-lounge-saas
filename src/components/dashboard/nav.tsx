'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function Nav() {
  return (
    <nav className="border-b border-brand-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="font-bold text-brand-900">
          Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/account">Account</Link>
          <Button variant="outline" onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </div>
    </nav>
  );
}
