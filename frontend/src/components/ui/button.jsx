import React from "react";

const Button = ({ className, children, variant = "default", ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export { Button }; 