"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Terminal, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="min-h-[90vh] flex flex-col justify-center pt-32 pb-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-neutral-400 mb-6 font-mono text-sm">
            <Terminal size={16} />
            <span>hello_world.sh</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-4">
            <span className="block text-neutral-100">Akande Ezra</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">
              Frontend Engineer & Visual Director.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
            I build high-performance, accessible, and user-centric digital experiences.
            Specialized in React, Next.js, and modern CSS, alongside professional media production
            and the integration of AI/Blockchain technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              className="gap-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download size={18} /> Resume.pdf
            </Button>
          </div>
        </motion.div>

        {/* Right Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl group flex-shrink-0"
        >
          <Image 
            src="/profile.jpg" 
            alt="Akande Ezra Profile" 
            fill 
            className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
            priority
          />
        </motion.div>
      </div>
    </Section>
  );
}
