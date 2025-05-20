import Link from 'next/link';
import { createSupabaseServerClient } from '@/utils/supabase-server';


export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className="home">
      <h1>Welcome to Next.js with Supabase Auth</h1>
      {session ? (
        <p>
          You are logged in as {session.user.email}.{' '}
          <Link href="/dashboard">Go to Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link href="/auth">Login or Register</Link> to access your dashboard.
        </p>
      )}
    </div>
  );
}