'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-brand-bg relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-20 left-0 text-[20vw] font-display font-black text-brand-primary/[0.02] select-none pointer-events-none leading-none">
        GAZA
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image
              src="https://picsum.photos/seed/about-human/1000/1200"
              alt="Our Story"
              width={1000}
              height={1200}
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-[2rem] z-20 animate-bounce-slow">
            <p className="text-brand-accent font-black text-4xl mb-1">10+</p>
            <p className="text-[10px] font-black text-brand-primary/40 uppercase tracking-widest">سنوات من العطاء المستمر</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-accent" />
            <span className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs">
              قصتنا ورؤيتنا
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black mb-10 leading-[1.15] text-brand-primary">
            غزة تستحق <br />
            أن تعيش <span className="text-brand-accent italic">بكرامة</span>
          </h2>
          
          <div className="space-y-8 text-lg text-brand-primary/60 leading-relaxed">
            <p>
              تأسست مبادرة أمل استجابةً للنداء الإنساني العاجل من قلب قطاع غزة، حيث نعمل على الأرض لتوفير الاحتياجات الأساسية للعائلات المتضررة والنازحة في ظل الظروف القاسية.
            </p>
            <p>
              نحن نركز جهودنا حالياً على الإغاثة الطارئة، توفير الوجبات الساخنة، المستلزمات الطبية، وترميم مراكز الإيواء، مؤمنين بأن تكاتفنا هو السبيل الوحيد لتخفيف آلام أهلنا في القطاع.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 mt-16">
            <div className="border-r-4 border-brand-accent/20 pr-6">
              <h4 className="text-4xl font-display font-black text-brand-primary mb-2">500k+</h4>
              <p className="text-[10px] font-black text-brand-primary/40 uppercase tracking-widest">وجبة وزعت في غزة</p>
            </div>
            <div className="border-r-4 border-brand-accent/20 pr-6">
              <h4 className="text-4xl font-display font-black text-brand-primary mb-2">100+</h4>
              <p className="text-[10px] font-black text-brand-primary/40 uppercase tracking-widest">مركز إيواء ندعمه</p>
            </div>
          </div>

          <button className="mt-16 btn-outline">
            اقرأ المزيد عن رؤيتنا
          </button>
        </motion.div>
      </div>
    </section>
  );
}
