/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Autocomplete.js
import { useState } from "react";
import Input from "./Input";
import ApiService from "../utils/axios";

function trailingDebounce(func: any, t: number) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args);
    }, t);
  };
}

const AutoCompleteSearch = () => {
  const [inputValue, _setInputValue] = useState("");
  const [filteredOptions, _setFilteredOptions] = useState([]);

  const search = async () => {
    const data = await ApiService.get(inputValue);
    console.log(data);
  };

  return (
    <div className="relative w-full">
      <Input
        value={inputValue}
        onchange={trailingDebounce(search, 800)}
        placeholder="جستجو در گوگل"
      />
      {inputValue.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg mt-1">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-3 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
