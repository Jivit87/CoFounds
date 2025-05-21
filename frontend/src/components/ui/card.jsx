import React from "react";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export { Card }; 