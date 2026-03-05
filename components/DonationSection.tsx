'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, CreditCard, Smartphone, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const donationAmounts = [
  { amount: 25, impact: 'وجبات ساخنة لعائلة' },
  { amount: 75, impact: 'سلة خضروات طازجة' },
  { amount: 250, impact: 'حقيبة طبية طارئة' },
  { amount: 500, impact: 'ترميم خيمة إيواء' },
];

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  return (
    <section id="donate" className="section-spacing bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4A373_0%,transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs">
                كن جزءاً من التغيير
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[1.15]">
              عطاؤك هو <br />
              <span className="text-brand-accent italic">شريان الحياة</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-lg">
              كل دولار تتبرع به يذهب مباشرة لتخفيف المعاناة في غزة. تبرعك اليوم يعني الغذاء، الدواء، والكساء لأهلنا الصامدين في وجه الصعاب.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass-panel p-6 rounded-[2rem] bg-white/5 border-white/10">
                <ShieldCheck className="text-brand-accent w-8 h-8 mb-4" />
                <h4 className="font-black text-lg mb-2">شفافية كاملة</h4>
                <p className="text-white/40 text-sm">نضمن وصول تبرعك لمستحقيه مع تقارير دورية دقيقة.</p>
              </div>
              <div className="glass-panel p-6 rounded-[2rem] bg-white/5 border-white/10">
                <Globe className="text-brand-accent w-8 h-8 mb-4" />
                <h4 className="font-black text-lg mb-2">تغطية شاملة</h4>
                <p className="text-white/40 text-sm">نصل إلى مختلف مناطق القطاع من الشمال إلى الجنوب.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-brand-ink p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="flex gap-2 p-2 bg-brand-primary/5 rounded-2xl mb-10">
                    <button
                      onClick={() => setFrequency('once')}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-black transition-all",
                        frequency === 'once' ? "bg-brand-primary text-white shadow-lg" : "text-brand-primary/40"
                      )}
                    >
                      مرة واحدة
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-sm font-black transition-all",
                        frequency === 'monthly' ? "bg-brand-primary text-white shadow-lg" : "text-brand-primary/40"
                      )}
                    >
                      تبرع شهري
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {donationAmounts.map((item) => (
                      <button
                        key={item.amount}
                        onClick={() => {
                          setSelectedAmount(item.amount);
                          setCustomAmount('');
                        }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all text-center group",
                          selectedAmount === item.amount
                            ? "border-brand-accent bg-brand-accent/5"
                            : "border-brand-primary/5 hover:border-brand-accent/30"
                        )}
                      >
                        <span className={cn(
                          "block text-3xl font-display font-black mb-1 transition-colors",
                          selectedAmount === item.amount ? "text-brand-accent" : "text-brand-primary"
                        )}>{item.amount}$</span>
                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40">{item.impact}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mb-10">
                    <div className="relative">
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="أدخل مبلغاً مخصصاً"
                        className="w-full p-6 bg-brand-primary/5 rounded-3xl border-none focus:ring-2 focus:ring-brand-accent transition-all text-xl font-black placeholder:text-brand-primary/20"
                      />
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-brand-primary/20 text-2xl">$</span>
                    </div>
                  </div>

                  <button
                    onClick={handleDonate}
                    disabled={isProcessing}
                    className="w-full py-6 bg-brand-primary text-white rounded-3xl font-black text-xl shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-4 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Heart className="w-6 h-6 fill-current" />
                        تبرع الآن
                      </>
                    )}
                  </button>

                  <div className="mt-10 flex justify-center gap-8 opacity-20">
                    <CreditCard className="w-8 h-8" />
                    <Smartphone className="w-8 h-8" />
                    <Globe className="w-8 h-8" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-display font-black text-brand-primary mb-6">شكراً لعطائك!</h3>
                  <p className="text-brand-primary/50 mb-10 leading-relaxed text-lg">
                    تم استلام تبرعك بنجاح. لقد ساهمت للتو في رسم ابتسامة على وجه إنسان. سنرسل لك تفاصيل الأثر الذي أحدثته قريباً.
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="text-brand-accent font-black border-b-4 border-brand-accent pb-1 hover:opacity-70 transition-all"
                  >
                    العودة للرئيسية
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
