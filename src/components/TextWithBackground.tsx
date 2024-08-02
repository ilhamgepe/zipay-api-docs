import { cn } from "@/lib/utils";
import React from "react";

const TextWithBackground = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <span className={cn("bg-clip-text", className)}>{text}</span>;
};

export default TextWithBackground;
