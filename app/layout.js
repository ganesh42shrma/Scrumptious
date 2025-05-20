import { createSupabaseServerClient } from '@/utils/supabase-server';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Next.js with Supabase Auth',
  description: 'A Next.js app with Supabase authentication',
};

export default async function RootLayout({ children }) {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <html lang="en"><head /><body>
      <header>
        <nav>
          <Link href="/">Home</Link>
          {session ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/auth">Login / Register</Link>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </body></html>
  );
}