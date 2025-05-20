import React from "react";
interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={` text-heading-1 text-xl sm:text-sm${className}`}>
      {children}
    </p>
  );
};
