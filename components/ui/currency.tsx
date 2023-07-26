"use client";

import { useEffect, useState } from "react";

import { priceFormatter } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface CurrencyProps {
  value?: string | number;
  className?: string;
}

const Currency: React.FC<CurrencyProps> = ({ value, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={(cn("font-semibold"), className)}>
      {priceFormatter.format(Number(value))}
    </div>
  );
};

export default Currency;
