import React from "react";

function CustomButton({ type = "", children, color = "", onClick }) {
  const colorClasses = {
    red: "bg-qred hover:bg-gray-900 rounded",
    black: "bg-gray-800 hover:bg-gray-700 rounded",
    search: "bg-qred hover:bg-gray-900 rounded-none",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2.5 border-0 text-sm focus:outline-none px-4 w-full uppercase transition-colors duration-300 text-qwhite font-medium tracking-wide flex justify-center ${
        colorClasses[color] || ""
      }`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
