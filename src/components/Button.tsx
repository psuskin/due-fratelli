"use client";

import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  fillDirection?: "top" | "bottom" | "left" | "right";
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  href,
  disabled = false,
  fillDirection = "bottom",
}: ButtonProps) => {
  // Base styles that apply to all variants
  const baseStyles =
    "relative px-8 py-3 text-sm uppercase tracking-[2px] overflow-hidden";

  // Size variations
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // Define fill direction styles
  const fillDirectionStyles = {
    top: "before:top-full before:left-0 hover:before:top-0",
    bottom: "before:top-[-100%] before:left-0 hover:before:top-0",
    left: "before:left-full before:top-0 hover:before:left-0",
    right: "before:left-[-100%] before:top-0 hover:before:left-0",
  };

  // Variant styles with modern design patterns
  const variantStyles = {
    primary: `
      text-white hover:text-[#dfbf5b]
      border border-[#dfbf5b]
      bg-[#dfbf5b]
      before:absolute before:w-full before:h-full
      before:bg-white before:transition-all before:duration-500 before:ease-in-out
      ${fillDirectionStyles[fillDirection]}
    `,
    outline: `
      text-[#dfbf5b] hover:text-white
      border border-[#dfbf5b]
      before:absolute before:w-full before:h-full
      before:bg-[#dfbf5b] before:transition-all before:duration-500 before:ease-in-out
      ${fillDirectionStyles[fillDirection]}
    `,
  };

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  // Framer Motion animation variants
  const buttonAnimations = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const content = (
    <span className="relative z-10 transition-colors duration-500">
      {children}
    </span>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={buttonStyles}
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimations}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
