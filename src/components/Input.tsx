import { InputProps } from "../Types/Types";

const Input: React.FC<InputProps> = ({
  placeholder,
  onchange,
  onkeydown,
  value,
}) => {
  return (
    <div className="floating-label border border-gray-300 rounded-md w-full">
      <input
        type="text"
        value={value}
        onChange={onchange}
        onKeyDown={onkeydown}
        id="floatingInput"
        className="block w-full h-full py-2 px-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
        placeholder=" "
      />
      <label htmlFor="floatingInput" className="label-text">
        {placeholder}
      </label>
    </div>
  );
};
export default Input;
