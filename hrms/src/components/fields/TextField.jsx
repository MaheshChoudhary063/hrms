// Custom components
import React from "react";

function InputTextField(props) {
  const {
    variant,
    label,
    id,
    extra,
    placeholder,
    cols,
    rows,
    state,
    error,
    disabled,
    ...rest
  } = props;

  return (
    <div className={`${extra}`}>
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
      <textarea
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={`mt-2 flex w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "!border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "!border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
        name={id}
        id={id}
        {...rest}
      />
    </div>
  );
}

export default InputTextField;
