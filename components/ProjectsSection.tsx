'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, Droplets, BookOpen, HeartPulse, Home, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'سقيا غزة: توفير مياه صالحة للشرب',
    category: 'الإغاثة المائية',
    image: 'https://picsum.photos/seed/gaza-water/800/600',
    progress: 82,
    target: '100,000$',
    raised: '82,000$',
    icon: Droplets,
    size: 'large',
  },
  {
    id: 2,
    title: 'الوجبات الساخنة للنازحين',
    category: 'الأمن الغذائي',
    image: 'https://picsum.photos/seed/gaza-food/600/600',
    progress: 65,
    target: '150,000$',
    raised: '97,500$',
    icon: BookOpen,
    size: 'small',
  },
  {
    id: 3,
    title: 'المستلزمات الطبية الطارئة',
    category: 'الصحة والطب',
    image: 'https://picsum.photos/seed/gaza-medical/600/600',
    progress: 45,
    target: '200,000$',
    raised: '90,000$',
    icon: HeartPulse,
    size: 'small',
  },
  {
    id: 4,
    title: 'ترميم مراكز الإيواء المؤقتة',
    category: 'الإيواء العاجل',
    image: 'https://picsum.photos/seed/gaza-shelter/800/600',
    progress: 30,
    target: '300,000$',
    raised: '90,000$',
    icon: Home,
    size: 'medium',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-accent" />
              <span className="text-brand-accent font-black uppercase tracking-widest text-xs">
                مشاريعنا الحالية
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.15] text-brand-primary">
              مبادرات تلمس حياة الناس <br />
              <span className="italic text-brand-accent opacity-80">وتصنع الفرق الحقيقي</span>
            </h2>
          </div>
          <button className="btn-outline flex items-center gap-3 group">
            عرض كل المشاريع
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "card-modern group relative overflow-hidden flex flex-col",
                project.size === 'large' ? "lg:col-span-2" : ""
              )}
            >
              <div className="absolute top-8 left-8 z-20">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <project.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="relative h-64 -mx-8 -mt-8 mb-8 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              
              <div className="flex-grow">
                <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-black text-brand-primary mb-6 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest mb-1">تم جمع</p>
                      <p className="text-xl font-display font-black text-brand-primary">{project.raised}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest mb-1">الهدف</p>
                      <p className="text-sm font-bold text-brand-primary/60">{project.target}</p>
                    </div>
                  </div>
                  
                  <div className="relative h-2 w-full bg-brand-primary/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute top-0 right-0 h-full bg-brand-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex items-center justify-between">
                <button className="text-sm font-black text-brand-primary flex items-center gap-2 group/btn">
                  ساهم الآن
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
                <span className="text-xs font-black text-brand-accent">{project.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';
