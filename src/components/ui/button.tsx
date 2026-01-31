import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl shadow-md hover:shadow-lg",
        outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        // Modern gradient button for CTAs
        gradient: "bg-accent-gradient text-white font-bold rounded-xl shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]",
        // Glass/outline style for hero sections
        glass: "border-2 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/50 rounded-xl",
        // Solid accent button
        accent: "bg-secondary text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110",
        // Outlined accent
        accentOutline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary rounded-xl font-bold",
        // WhatsApp style
        whatsapp: "bg-[hsl(142_70%_45%)] text-white font-bold rounded-xl shadow-lg shadow-[hsl(142_70%_45%/0.3)] hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 px-8 py-4 text-base [&_svg]:size-5",
        xl: "h-16 px-10 py-5 text-lg [&_svg]:size-6",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
