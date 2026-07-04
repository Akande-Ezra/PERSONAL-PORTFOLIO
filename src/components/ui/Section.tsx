import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export function Section({ id, className, children, title }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 max-w-7xl mx-auto w-full", className)}>
      {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-neutral-100">{title}</h2>}
      {children}
    </section>
  );
}
