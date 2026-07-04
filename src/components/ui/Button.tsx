import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none rounded-md px-6 py-3";
  
  const variants = {
    primary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    secondary: "bg-neutral-800 text-neutral-100 hover:bg-neutral-700",
    outline: "border border-neutral-700 bg-transparent text-neutral-100 hover:bg-neutral-800",
    ghost: "bg-transparent text-neutral-100 hover:bg-neutral-800",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
