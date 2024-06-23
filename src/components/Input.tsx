import { InputProps } from "../Types/Types";

export default function Input({
  placeholder,
  onchange,
  onkeydown,
  value,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onchange}
      onKeyDown={onkeydown}
      type="text"
      placeholder={placeholder}
      className=" rounded-lg p-1 w-full  focus:outline-none border-2 border-slate-400"
    />
  );
}
