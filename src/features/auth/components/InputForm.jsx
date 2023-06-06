import createClasses from "../../../utils/create-classes";

export default function LoginInput({
  placeholder,
  value,
  name,
  isInvalid,
  onChange,
  id,
  type,
}) {
  const className = createClasses(
    "rounded-lg p-1 w-full mt-2",
    isInvalid
      ? "border-red-500 focus:ring-red-300"
      : "border-grey-399 focus:border-blue-500 focus:ring-blue-300"
  );
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={className}
      onChange={onChange}
      id={id}
    />
  );
}
