import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { PerformanceDashboard } from "@/components/sections/PerformanceDashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Awards />
      <PerformanceDashboard />
      <Contact />
      <footer className="w-full py-8 text-center border-t border-neutral-900 mt-20 text-sm text-neutral-500 font-mono">
        <p>© {new Date().getFullYear()} Akande Ezra. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
