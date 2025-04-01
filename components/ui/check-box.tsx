"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[25px] w-[25px] bg-white shrink-0 rounded-sm border-[1px] border-[#CDCDCD] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-[#2469F6] data-[state=checked]:text-white data-[state=checked]:border-[#2469F6]",
      "group-hover:border-[2px] group-hover:border-[#E3E3E3]",
      "group-hover:data-[state=checked]:bg-[#5087F8] group-hover:data-[state=checked]:border-[#5087F8]",
      "group-active:shadow-[0_0_0_2px_rgba(80,135,248,0.3)] group-active:data-[state=checked]:bg-[#5087F8]",
      "relative",
      className
    )}
    {...props}
  >
    {/* Checked state indicator */}
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-[25px] w-[25px]" />
    </CheckboxPrimitive.Indicator>

    {/* Hover state indicator (only visible when unchecked and hovered) */}
    <div className="absolute inset-0 flex  items-center justify-center opacity-0 group-hover:opacity-100  data-[state=checked]:opacity-0 pointer-events-none">
      <Check className="h-[25px] w-[25px] text-[#E3E3E3]" />
    </div>

    {/* Active state indicator (only visible when unchecked and actively pressing) */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 data-[state=checked]:opacity-0 pointer-events-none">
      <Check className="h-[25px] w-[25px] text-[#878787]" />
    </div>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
