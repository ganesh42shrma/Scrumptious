import { createSupabaseServerClient } from '@/utils/supabase-server';
import { redirect } from "next/navigation";
import SignOut from "../../components/signOut";

export default async function Dashboard() {
  const supabase = await createSupabaseServerClient();
  const { data: { session }} = await supabase.auth.getSession();

  if(!session){
    redirect('/auth');
  }

  return(
    <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome , {session.user.email} </p>
        <SignOut/>
    </div>
  )
}
