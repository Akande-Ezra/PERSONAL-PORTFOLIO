"use client";

import { Section } from "@/components/ui/Section";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "akandeezra240@gmail.com",
      href: "mailto:akandeezra240@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "group-hover:text-red-400"
    },
    {
      name: "LinkedIn",
      value: "Connect professionally",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-6 h-6" />,
      color: "group-hover:text-blue-500"
    },
    {
      name: "GitHub",
      value: "Explore my repositories",
      href: "https://github.com",
      icon: <Github className="w-6 h-6" />,
      color: "group-hover:text-neutral-200"
    }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-center justify-center p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className={`mb-4 text-neutral-400 transition-colors duration-300 ${link.color}`}>
              {link.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">
              {link.name}
            </h3>
            
            <p className="text-sm text-neutral-500 text-center mb-6 max-w-[180px]">
              {link.value}
            </p>
            
            <div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
