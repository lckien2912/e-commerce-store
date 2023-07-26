"use client";

import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import MobileNav from "@/components/mobile-nav";
import { Category } from "@/types";

interface NavbarActionsProps {
  data: Category[];
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <MobileNav data={data} />
    </div>
  );
};

export default NavbarActions;
