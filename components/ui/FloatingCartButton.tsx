"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartPopup from "@/components/CartPopup";
import { useCart } from "@/context/CartContext";

export default function FloatingCartButton() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-40 bg-gold text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </button>
      {open && <CartPopup onClose={() => setOpen(false)} />}
    </>
  );
}