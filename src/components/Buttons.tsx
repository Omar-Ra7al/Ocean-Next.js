import { ReactNode } from "react";

interface ComponentProps {
  variant?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}

const Buttons = ({
  variant = "primary",
  isFullSize,
  children,
}: ComponentProps) => {
  return (
    <button
      className={`btn ${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : "btn-outline"
      }`}>
      {children}
    </button>
  );
};

export default Buttons;