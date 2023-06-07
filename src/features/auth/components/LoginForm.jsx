import LoginInput from "./InputForm";
import LoginLabel from "./LabelForm";
import { useState } from "react";
import { login } from "../slice/auth-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateLogin from "../validator/validate-login";
import InputErrorMessage from "./InputErrorMessage";

const initialInput = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(login(input)).unwrap();
      toast.success("login successfully");
      navigate("/home");
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="w-full flex flex-col items-center p-4 gap-5">
      <h1 className="text-xl">Login</h1>
      <form action="" className="w-[50%]" onSubmit={handleSubmitForm}>
        <div className="grid gap-5">
          <div>
            <LoginLabel id="email" text="Email address" />
            <br />
            <LoginInput
              placeholder="example@gmail.com"
              name="email"
              onChange={handleChangeInput}
              value={input.email}
              id="email"
              type="text"
            />
            {error.email && <InputErrorMessage message={error.email} />}
          </div>
          <div>
            <LoginLabel id="password" text="Password" />
            <br />
            <LoginInput
              placeholder="password"
              name="password"
              onChange={handleChangeInput}
              value={input.password}
              id="password"
              type="password"
            />
            {error.password && <InputErrorMessage message={error.password} />}
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
