import SignUp from "@/components/signUp";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="auth-container">
      <SignUp />
      <nav className="auth-nav">
        <p className="text-md" >Already have an account ?</p>
        <Link className="underline text-blue-500" href="/auth/signin">Sign In</Link>
      </nav>
    </div>
  );
}
