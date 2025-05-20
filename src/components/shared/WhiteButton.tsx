import React from "react";

interface WhiteButtonProps {
  className?: string;
  children: React.ReactNode;
}
export const WhiteButton = ({ children, className = "" }: WhiteButtonProps) => {
  return (
    <button
      className={`relative flex items-center justify-center overflow-hidden bg-white text-heading-1
    transition-all duration-300 border-1 border-black
    hover:bg-[rgb(var(--color-bg-purple))] hover:text-white hover:border-transparent
    py-2 px-6 rounded cursor-pointer font-semibold ${className}`}
    >
      {children}
    </button>
  );
};
