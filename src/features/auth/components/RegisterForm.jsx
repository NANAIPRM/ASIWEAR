import RegisterInput from "./InputForm";
import RegisterLabel from "./LabelForm";
import { useState } from "react";
import validateRegister from "../validator/validate-register";
import InputErrorMessage from "./InputErrorMessage";
import { toast } from "react-toastify";
import { registerAsync } from "../slice/auth-slice";
import { useDispatch } from "react-redux";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(registerAsync(input)).unwrap();
      toast.success("register successfully");
      onSuccess();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="w-full bg-[#59FFC3] shadow-[0_0_15px_rgb(0_0_0_/0.2)]  flex flex-col  justify-center items-center p-4 gap-5 border-solid border-2 border-black h-full">
      <h1 className="text-xl">Sign Up</h1>
      <form action="" className="w-[50%]" onSubmit={handleSubmitForm}>
        <div className="grid gap-5 ">
          <div className="w-full">
            <RegisterLabel id="firstName" text="First name" />
            <br />
            <RegisterInput
              placeholder="Write your First Name"
              name="firstName"
              onChange={handleChangeInput}
              value={input.firstName}
              id="firstName"
              isInvalid={error.firstName}
              type="text"
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
          </div>
          <div>
            <RegisterLabel id="lastName" text="Last name" />
            <br />
            <RegisterInput
              placeholder="Write your Last Name"
              name="lastName"
              id="lastName"
              onChange={handleChangeInput}
              value={input.lastName}
              isInvalid={error.lastName}
              type="text"
            />
            {error.lastName && <InputErrorMessage message={error.lastName} />}
          </div>
          <div>
            <RegisterLabel id="emailregistor" text="Email" />
            <br />
            <RegisterInput
              placeholder="example@gmail.com"
              name="email"
              id="emailregistor"
              onChange={handleChangeInput}
              value={input.email}
              isInvalid={error.email}
              type="text"
            />
            {error.email && <InputErrorMessage message={error.email} />}
          </div>
          <div>
            <RegisterLabel id="passwordregistor" text="Password" />
            <br />
            <RegisterInput
              placeholder="password"
              name="password"
              id="passwordregistor"
              onChange={handleChangeInput}
              value={input.password}
              isInvalid={error.password}
              type="password"
            />
            {error.password && <InputErrorMessage message={error.password} />}
          </div>
          <div>
            <RegisterLabel id="cfpassword" text="Confirm Password" />
            <br />
            <RegisterInput
              placeholder="confirm password"
              name="confirmPassword"
              id="cfpassword"
              onChange={handleChangeInput}
              value={input.confirmPassword}
              isInvalid={error.confirmPassword}
              type="password"
            />
            {error.confirmPassword && (
              <InputErrorMessage message={error.confirmPassword} />
            )}
          </div>
          <div>
            <button className="bg-black text-white w-full leading-[3rem] rounded-md ">
              Create an account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
