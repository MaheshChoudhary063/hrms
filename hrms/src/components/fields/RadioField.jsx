import Radio from "components/radio";

const RadioField = ({
  name,
  label,
  options,
  onChange,
  value,
  error,
  desc,
  variant,
  extra,
}) => {
  return (
    <div className={`flex flex-col ${extra}`}>
      <label
        className={`flex items-end justify-between text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "font-medium" : "font-bold"
        }`}
      >
        <span>{label}</span>
        {error && (
          <span className="text-xs text-red-500 dark:!text-red-400">
            {error}
          </span>
        )}
      </label>
      {options.map((option) => (
        <div
          key={option.value}
          className="mt-2 flex items-center justify-between"
        >
          <label
            htmlFor={`${name}-${option.value}`}
            className="max-w-[80%] hover:cursor-pointer lg:max-w-[65%]"
          >
            <span className="text-sm font-bold text-navy-700 dark:text-white">
              {option.label}
            </span>
            <p className="text-xs text-gray-600">{option.desc}</p>
          </label>
          <Radio
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            color={error ? "red" : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioField;
