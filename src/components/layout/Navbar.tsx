"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Why Cold Press?", href: "/#why" },
  { label: "Our Oils", href: "/oils" },
  { label: "Our Story", href: "/#story" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-theme">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Chetana Cold Pressed Oils logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-xl font-bold text-on-surface tracking-tight font-headline">
            Chetana
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center text-sm tracking-wide font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#order"
            className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Order Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-on-surface">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="md:hidden border-t border-theme overflow-hidden bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-on-surface-variant hover:text-primary py-2.5 text-sm font-medium border-b border-outline/40 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#order"
                onClick={() => setOpen(false)}
                className="block mt-3 bg-primary text-on-primary px-5 py-3 rounded-full text-sm font-bold text-center"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
