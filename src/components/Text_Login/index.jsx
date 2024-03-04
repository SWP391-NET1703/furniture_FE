import React from "react";

const sizes = {
  xs: "text-base font-normal",
  s: "text-lg font-normal",
};

const TextLogin = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { TextLogin };
