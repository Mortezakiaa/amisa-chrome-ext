import { ButtonProps } from "../Types/Types";

export default function Button({ onclick, txt, mode }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      type="button"
      className={`
        ${
          mode === "default" &&
          "border border-blue-500 text-blue-500 font-bold p-1 text-xs rounded"
        }
        ${
          mode === "delete" &&
          "border border-red-500 text-red-500 font-bold p-1 text-xs rounded"
        }
        ${
          mode === "other" &&
          "border border-green-500 text-green-500 font-bold p-1 text-xs rounded"
        }
        `}
    >
      {txt}
    </button>
  );
}
