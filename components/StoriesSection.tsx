'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: 'أم أحمد',
    age: 42,
    location: 'شمال غزة',
    story: 'بفضل الوجبات الساخنة التي تقدمها المبادرة، استطعت إطعام أطفالي الخمسة في وقت لم نجد فيه كسرة خبز. أنتم شريان الحياة لنا.',
    image: 'https://picsum.photos/seed/gaza-woman1/600/800',
  },
  {
    id: 2,
    name: 'ياسين',
    age: 10,
    location: 'خان يونس',
    story: 'كنت أحلم بشرب ماء نظيف، والآن بفضل بئر المياه الذي حفرتموه، لم نعد نمرض. شكراً لكل من ساعدنا.',
    image: 'https://picsum.photos/seed/gaza-child1/600/800',
  },
  {
    id: 3,
    name: 'الدكتور محمد',
    age: 38,
    location: 'مستشفى الشفاء',
    story: 'المستلزمات الطبية التي وصلت من مبادرة أمل أنقذت عشرات الجرحى في ليلة واحدة. دعمكم هو ما يبقينا مستمرين في عملنا.',
    image: 'https://picsum.photos/seed/gaza-doctor1/600/800',
  },
];

export default function StoriesSection() {
  return (
    <section id="stories" className="section-spacing bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-brand-accent font-black uppercase tracking-widest text-xs">
              قصص من الميدان
            </span>
            <div className="h-px w-8 bg-brand-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-[1.15] text-brand-primary mb-8">
            أثر عطائكم في <br />
            <span className="italic text-brand-accent opacity-80">حياة المستفيدين</span>
          </h2>
          <p className="text-xl text-brand-primary/50 leading-relaxed">
            وراء كل رقم قصة إنسان، ووراء كل تبرع حياة جديدة تبدأ. هذه بعض الشهادات الحية لمن تغيرت حياتهم بفضل دعمكم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl mb-10">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 right-10 left-10 text-white">
                  <Quote className="text-brand-accent w-10 h-10 mb-6 opacity-50" />
                  <p className="text-xl font-medium italic leading-relaxed mb-8">
                    &quot;{story.story}&quot;
                  </p>
                  <div className="h-px w-12 bg-brand-accent mb-4" />
                  <h4 className="text-2xl font-display font-black">{story.name}</h4>
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">{story.location} • {story.age} عاماً</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
