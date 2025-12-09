import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// PillionPal Brand Colors
// Light mode primary:  #008955
// Dark mode primary:   #3DD68C

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.97] focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#008955] text-white hover:bg-[#007144] dark:bg-[#3DD68C] dark:text-black dark:hover:bg-[#32c07d]",
        outline:
          "border border-[#008955] text-[#008955] hover:bg-[#008955]/10 dark:border-[#3DD68C] dark:text-[#3DD68C] dark:hover:bg-[#3DD68C]/10",
        ghost:
          "text-[#008955] hover:bg-[#008955]/10 dark:text-[#3DD68C] dark:hover:bg-[#3DD68C]/10",
        subtle:
          "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-[#1A1F1D] dark:hover:bg-[#232927] dark:text-gray-200",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
