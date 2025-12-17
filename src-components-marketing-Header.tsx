'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useSession } from 'next-auth/react';

export function Header() {
  const { data } = useSession();
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-brand-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-900">
          Pars Lounge Café
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#about">About</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#location">Location</Link>
        </nav>
        <div className="flex items-center gap-3">
          {data ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}