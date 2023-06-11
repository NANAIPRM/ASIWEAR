import RegisterForm from "../features/auth/components/RegisterForm";
import LoginForm from "../features/auth/components/LoginForm";
import Header from "../layouts/Headers";
export default function LoginPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto  flex  items-center justify-center w-[95vw] h-[90vh]">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}
