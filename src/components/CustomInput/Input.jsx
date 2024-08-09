export default function CustomInput({
  label,
  type,
  name,
  placeholder,
  children,
  onChange,
  value,
  onBlur,
  inputClasses,
  labelClasses = "",
  icon,
}) {
  return (
    <div className="w-full h-full">
      {label && (
        <label
          className={`leading-7 text-sm text-gray-600 capitalize ${
            labelClasses || ""
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <span className="absolute text-gray-600">{icon}</span>}
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full border-gray-300 text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-sm bg-white border font-medium text-gray-900 ${
            icon ? "ps-9" : ""
          } ${inputClasses || "rounded leading-9 focus:outline-qred"}`}
          type={type}
          id={name}
          name={name}
        />{" "}
      </div>
      {children && children}
    </div>
  );
}
