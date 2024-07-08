const ChipField = ({
  label,
  options,
  onChange,
  value,
  error,
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
      <div className="flex items-center gap-2 mt-2">
        {options.map((item, index) => (
          <label
            key={index}
            onClick={() => onChange(item)}
            className={`px-6 py-0.5 rounded-full border hover:cursor-pointer ${
              value.includes(item)
                ? "border-brand-900 shadow-md dark:border-white"
                : "dark:border-white/10"
            }`}
          >
            <span className="text-sm text-navy-700 dark:text-white">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ChipField;
