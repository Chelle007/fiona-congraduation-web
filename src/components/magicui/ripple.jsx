import React from "react";

import { cn } from "@/lib/utils";

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return (
    <div className={cn("fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none", className)} {...props}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full border bg-green-300/50 shadow-xl`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: "rgba(23, 100, 50, 1)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)"
              }
            } />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
