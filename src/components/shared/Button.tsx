import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
export const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`relative flex items-center justify-center overflow-hidden bg-purple 
    transition-all duration-300 border-1 border-transparent
    hover:bg-white hover:text-black hover:border-black
    text-white py-2 px-6 rounded cursor-pointer font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
