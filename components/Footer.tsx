'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-32 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute -bottom-20 right-0 text-[30vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        GAZA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center rotate-3">
                <Heart className="text-white w-7 h-7 fill-current" />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter">أمل.</span>
            </div>
            <p className="text-2xl text-white/50 leading-relaxed mb-12 max-w-md">
              نحن لا نقدم المساعدات فقط، نحن نبني <span className="text-white font-black italic">صموداً</span> لأهلنا في غزة المحاصرة.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:scale-110 transition-all duration-500 border border-white/10">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-10">الروابط</h4>
            <ul className="space-y-6 text-lg font-bold">
              <li><Link href="#" className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 group">الرئيسية <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="#about" className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 group">من نحن <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="#projects" className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 group">مشاريعنا <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="#stories" className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 group">قصص النجاح <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-10">النشرة البريدية</h4>
            <p className="text-white/40 mb-8 text-lg">اشترك لتصلك آخر أخبار مشاريعنا وتقارير الأثر الإنساني مباشرة.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full p-8 bg-white/5 rounded-[2rem] border border-white/10 focus:outline-none focus:border-brand-accent transition-all text-xl placeholder:text-white/20"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all">
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-black uppercase tracking-widest">
          <p>© 2024 مبادرة أمل لإغاثة غزة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-brand-accent transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-white transition-colors">لأجل غزة، نصنع الأمل</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
