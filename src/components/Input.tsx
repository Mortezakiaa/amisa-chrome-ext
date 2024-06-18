import { InputProps } from "../Types/Types";

export default function Input({
  placeholder,
  onchange,
  onkeydown,
}: InputProps) {
  return (
    <input
      onChange={onchange}
      onKeyDown={onkeydown}
      type="text"
      placeholder={placeholder}
      className="my-5 w-1/4 p-2 rounded-lg   focus:outline-none border-2 border-slate-400  "
    />
  );
}
