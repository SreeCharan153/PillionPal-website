"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SimpleModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SimpleModal({ open, onClose, children }: SimpleModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-[#0B0F0E] rounded-2xl p-6 w-full max-w-sm shadow-xl border border-foreground/10 relative"
          >
            <button
              className="absolute top-3 right-3 text-foreground/60 hover:text-foreground"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
