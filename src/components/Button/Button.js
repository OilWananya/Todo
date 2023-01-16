import React  from "react";

const Button = ({ 
    border,
    type,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
        onClick={onClick}
        type={type}
        style={{
          backgroundColor: color,
          border,
          borderRadius: radius,
          height,
          width
        }}
    >
        {children}
    </button>
  );
}

export default Button;