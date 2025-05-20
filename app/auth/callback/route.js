import { createSupabaseServerClient } from '@/utils/supabase-server';
import { NextResponse } from 'next/server'

export async function GET(request) {
  const supabase = await createSupabaseServerClient();

  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/dashboard', request.url))
}