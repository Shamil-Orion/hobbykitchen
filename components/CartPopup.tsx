"use client";
import { useCart } from "@/context/CartContext";
import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPopup({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart, clearCart } = useCart();

  const sendToWhatsApp = () => {
    const phoneNumber = "971507940372";
    const header = `Hello! I would like to place the following order from *Hobby Kitchen*. Please let me know the availability and price:\n`;
    const itemList = cart.map((item: string, index: number) => `${index + 1}. *${item}*`).join("\n");
    const message = encodeURIComponent(`${header}\n${itemList}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gradient-to-b from-primary-purple to-primary-dark border border-gold/20 text-white p-6 w-[90%] max-w-md shadow-2xl relative"
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gold hover:text-red-500 transition-colors"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <h2 className="text-xl font-forum text-gold mb-4">Your Cart</h2>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className="text-gray-300">Cart is empty.</p>
          ) : (
            <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.map((item: string, index: number) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-primary-dark rounded-lg px-3 py-2 border border-transparent hover:border-gold/20 transition-all"
                >
                  <span className="text-sm text-white">{item}</span>
                  <button
                    className="text-red-400 hover:text-red-600 transition-colors"
                    onClick={() => removeFromCart(item)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Action Buttons */}
          {cart.length > 0 && (
            <div className="mt-6 flex justify-between gap-3">
               <button
    onClick={clearCart}
    className="opacity-100 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs font-bold transition-all duration-300 flex items-center justify-center w-1/2"
  >
    Clear All
  </button>

              <button
    onClick={sendToWhatsApp}
    className="opacity-100 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 w-1/2"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
    </svg>
    Order
  </button>

            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
