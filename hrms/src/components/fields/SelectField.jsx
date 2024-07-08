import React, { useState, useRef, useEffect } from "react";

const SelectField = ({
  variant,
  label,
  error,
  extra,
  options,
  disabled,
  state,
  multiSelect = false,
  id,
  value,
  onChange,
  ...rest
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    let newValue;

    if (multiSelect) {
      // Toggle selection for multi-select mode
      newValue = value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option];
    } else {
      newValue = option;
      setDropdownOpen(false); // Close the dropdown after selecting an option
    }
    onChange(newValue);
  };

  const handleInputClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${extra}`} ref={dropdownRef}>
      <label
        htmlFor={id}
        className={`flex items-end justify-between text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        <span>{label}</span>
        {error && (
          <span className="text-xs text-red-500 dark:!text-red-400">
            {error}
          </span>
        )}
      </label>
      <div className="relative">
        <input
          id={id}
          type="text"
          readOnly
          value={Array.isArray(value) ? value.join(", ") : value}
          onClick={handleInputClick}
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
            disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
          placeholder="Select options"
          {...rest}
        />
        {dropdownOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg">
            <ul className="shadow-xs max-h-60 overflow-y-auto rounded-2xl py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              {options.map((option) => (
                <li
                  key={option}
                  className={`relative m-2 cursor-pointer select-none rounded-xl py-2 pl-4 pr-4 ${
                    multiSelect && value.includes(option)
                      ? "bg-brand-900 text-white"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  <span
                    className={`block truncate ${
                      multiSelect && value.includes(option)
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
