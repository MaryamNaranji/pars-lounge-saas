export function Footer() {
  return (
    <footer className="py-10 border-t border-brand-200 text-center text-sm text-brand-600">
      © {new Date().getFullYear()} Pars Lounge Café SaaS. Built with Next.js + Stripe + Firebase.
    </footer>
  );
}