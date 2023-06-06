import LoginInput from "./InputForm";
import LoginLabel from "./LabelForm";

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col items-center p-4 gap-5">
      <h1 className="text-xl">Login</h1>
      <form action="" className="w-[50%]">
        <div className="grid gap-5">
          <div>
            <LoginLabel link="email" text="Email an address" />
            <br />
            <LoginInput
              placeholder="example@gmail.com"
              id="email"
              className="rounded-lg p-1 w-full mt-2 bg-slate-200"
            />
          </div>
          <div>
            <LoginLabel link="password" text="Password" />
            <br />
            <LoginInput
              placeholder="password"
              id="password"
              className="rounded-lg p-1 w-full mt-2  bg-slate-200"
            />
          </div>
          <div>
            <button className="bg-black text-white w-full leading-[3rem] rounded-lg ">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
