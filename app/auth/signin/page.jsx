import SignIn from "@/components/signIn";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="auth-container">
      <SignIn />
      <nav className="auth-nav">
        <p className="text-md">Don't have an account ?</p>
        <Link className="underline text-blue-500" href="/auth/signup">Sign Up</Link>
      </nav>
    </div>
  );
}