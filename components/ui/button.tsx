import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground w-[340px] h-[40px] top-[20px] left-[20px] rounded-[4px] px-[10px] py-[20px] gap-[10px] hover:top-[80px] hover:bg-secondary transition-all duration-0",

        variant2:
          "bg-secondary text-secondary-foreground w-[340px] h-[40px] top-[80px] left-[20px] rounded-[4px] px-[10px] py-[20px] gap-[10px] ",
        variant3:
          "bg-primary text-secondary-foreground w-[340px] h-[40px] top-[140px] left-[20px] rounded-[4px] px-[10px] py-[20px] gap-[10px] ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
