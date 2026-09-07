import React from "react";
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600",

    outline:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100",

    success:
      "bg-green-500 text-white hover:bg-green-600",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2",
    large: "px-7 py-3",
  };

  return (
    <button
      className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-full
        transition
        duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;