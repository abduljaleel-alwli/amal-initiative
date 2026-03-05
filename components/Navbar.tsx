'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#about' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'قصص النجاح', href: '#stories' },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        top: isScrolled ? 16 : 24,
        width: isScrolled ? '95%' : '90%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.05)' : 'none',
        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0)',
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 -translate-x-1/2 z-50 max-w-7xl rounded-full px-8 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center rotate-3">
            <Heart className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-black tracking-tighter text-brand-primary">
            أمل.
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-brand-primary/70 hover:text-brand-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#donate"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all"
          >
            تبرع الآن
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full mt-4 left-0 right-0 glass-panel p-8 flex flex-col gap-6 md:hidden rounded-[2rem]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-brand-primary border-b border-brand-primary/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center"
            >
              تبرع الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
