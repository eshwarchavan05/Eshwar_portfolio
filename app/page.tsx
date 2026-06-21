import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { GithubSection } from "@/components/GithubSection";
import { Education } from "@/components/Education";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <GithubSection />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
