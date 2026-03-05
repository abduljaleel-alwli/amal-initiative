'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-brand-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-brand-accent" />
            <span className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs">
              مبادرة أمل لإغاثة غزة
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.15] text-brand-primary mb-8 text-balance">
            لأجل <span className="text-brand-accent italic">غزة</span> <br />
            نصنع الأمل <br />
            من الركام.
          </h1>
          
          <p className="text-xl text-brand-primary/60 mb-12 leading-relaxed max-w-lg">
            من قلب الحصار، نمد يد العون لأهلنا في غزة. نحن هنا لنطعم الجائع، ونعالج الجريح، ونعيد بناء ما دمره العدوان، لنضمن أن الأمل لن ينقطع أبداً.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="btn-primary flex items-center gap-3">
              ساهم الآن
              <Heart className="w-5 h-5" />
            </button>
            <button className="btn-outline flex items-center gap-3">
              اكتشف مشاريعنا
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-bg overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="Donor"
                    width={100}
                    height={100}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-brand-bg bg-brand-accent flex items-center justify-center text-white text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="text-sm font-bold text-brand-primary/40">
              انضم إلى أكثر من <span className="text-brand-primary">5000 متضامن</span> لدعم غزة هذا الشهر
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image
              src="https://picsum.photos/seed/human-hope/1000/1250"
              alt="Humanitarian Impact"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-[2rem] max-w-[240px]"
          >
            <h4 className="text-3xl font-display font-black text-brand-primary mb-1">150+</h4>
            <p className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest">مبادرة إغاثية عاجلة في غزة</p>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="h-1 w-full bg-brand-accent rounded-full" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
