import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <AuthForm mode="signup" />
    </div>
  );
}
