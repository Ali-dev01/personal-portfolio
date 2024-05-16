import Biography from "@/sections/about";
import Contact from "@/sections/contact-us";
import Experience from "@/sections/experience";
import HomeSection from "@/sections/personal-info";
import Portfolio from "@/sections/portfolio";

export default function Home() {
  return (
    <main>
      <section id="intro">
        <HomeSection />
      </section>
      <section id="bio">
        <Biography />
      </section>
      <section id="resume">
        <Experience />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
