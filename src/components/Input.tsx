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
      className="p-2 rounded-lg w-full focus:outline-none border-2 border-slate-400"
    />
  );
}
