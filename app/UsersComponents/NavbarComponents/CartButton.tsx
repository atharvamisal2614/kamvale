"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  unitText: string;
}

interface CartButtonProps {
  initialItems?: CartItem[];
  variant?: "desktop" | "mobile";
}

const DEFAULT_ITEMS: CartItem[] = [
  { id: "1", name: "Home AC Deep Cleaning", quantity: 1, price: 499, unitText: "1 unit • Standard" },
  { id: "2", name: "Kitchen Chimney Service", quantity: 1, price: 299, unitText: "1 unit • Inspection" },
];

export default function CartButton({
  initialItems = DEFAULT_ITEMS,
  variant = "desktop",
}: CartButtonProps) {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={cartRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/70 rounded-full transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 cursor-pointer"
        aria-label={`Shopping Cart with ${totalCount} items`}
      >
        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
        {totalCount > 0 && (
          <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold text-white bg-emerald-600 rounded-full px-1 shadow-sm ring-2 ring-white animate-in zoom-in duration-150">
            {totalCount}
          </span>
        )}
      </button>

      {/* Quick Cart Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-emerald-600" />
              Your Cart ({totalCount})
            </h4>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Ready to book
            </span>
          </div>

          <div className="py-3 space-y-2.5 max-h-56 overflow-y-auto">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-xs p-2 rounded-xl bg-gray-50 hover:bg-emerald-50/40 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-[11px] text-gray-500">{item.unitText}</p>
                  </div>
                  <span className="font-semibold text-emerald-700">₹{item.price}</span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-400 text-center py-4">Your cart is empty</p>
            )}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-900 mb-3">
              <span>Total Estimate</span>
              <span className="text-sm font-bold text-emerald-700">₹{totalPrice}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2 px-4 text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
