'use client';
import { useState } from 'react';
import { createSupabaseBrowserClient } from '../utils/supabase-client';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleSignOut} disabled={loading}>
      {loading ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}