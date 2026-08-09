import { About } from "@/components/about";
import { Background, ScrollProgress } from "@/components/background";
import { Contact, Footer } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
