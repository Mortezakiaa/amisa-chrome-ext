import { ButtonProps } from "../Types/Types";

function DefaultButton({ onclick, txt }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      type="button"
      className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded"
    >
      {txt}
    </button>
  );
}

export default DefaultButton;
