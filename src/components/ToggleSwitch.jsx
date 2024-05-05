import React from "react";
import { useState } from "react";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="relative inline-flex cursor-pointer select-none items-center w-[120px]">
        <input
          type="checkbox"
          name="credentials"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-blue-700" : "bg-gray-300"
          }`}
        >
          <span
            className={`h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
        <span className="flex items-center text-sm font-medium text-gray-700 ml-3">
          <span> {isChecked ? "Admin" : "User"} </span>
        </span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
