import React from "react";
type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className={`text-heading-1 font-semibold text-4xl ${className}`}>
      {children}
    </h1>
  );
};
