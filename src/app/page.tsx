import Biography from "@/sections/about";
import Experience from "@/sections/experience";
import HomeSection from "@/sections/personal-info";

export default function Home() {
  return (
    <main>
      <section>
        <HomeSection />
      </section>
      <section>
        <Biography />
      </section>
      <section>
        <Experience />
      </section>
    </main>
  );
}
