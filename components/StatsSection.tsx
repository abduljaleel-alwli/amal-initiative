'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'الغذاء', value: 95000, target: 150000, color: '#2D3A2D' },
  { name: 'المياه', value: 82000, target: 100000, color: '#D4A373' },
  { name: 'الصحة', value: 90000, target: 200000, color: '#4A5D4A' },
  { name: 'الإيواء', value: 90000, target: 300000, color: '#8B7355' },
];

export default function StatsSection() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-accent" />
              <span className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs">
                الشفافية والأثر
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-10 leading-[1.15] text-brand-primary">
              نحن نؤمن <br />
              بالشفافية <span className="text-brand-accent italic">المطلقة</span>
            </h2>
            <p className="text-xl text-brand-primary/50 mb-12 leading-relaxed">
              نشارككم تقدمنا في تحقيق الأهداف لكل قطاع. تبرعاتكم تترجم مباشرة إلى مشاريع على الأرض، وهنا نوضح المبالغ التي تم جمعها مقابل الأهداف المحددة لكل مبادرة.
            </p>
            
            <div className="space-y-10">
              {data.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-3">
                    <span className="font-black text-brand-primary">{item.name}</span>
                    <span className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest">
                      {item.value.toLocaleString()}$ / {item.target.toLocaleString()}$
                    </span>
                  </div>
                  <div className="w-full h-4 bg-brand-primary/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / item.target) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      style={{ backgroundColor: item.color }}
                      className="h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] w-full bg-brand-bg p-12 rounded-[3.5rem] border border-brand-primary/5 shadow-xl relative"
          >
            <div className="absolute top-10 right-10 left-10 flex justify-between items-center">
              <h4 className="font-display font-black text-xl text-brand-primary">توزيع التبرعات</h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-accent" />
                <div className="w-3 h-3 rounded-full bg-brand-primary/10" />
              </div>
            </div>
            
            <div className="h-full pt-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#1A1A1A', fontSize: 12, fontWeight: 900 }}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', padding: '20px' }}
                  />
                  <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
