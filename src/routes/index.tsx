import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  BeyondCode,
  Contact,
  Exploring,
  Footer,
  Impact,
  Learning,
} from "@/components/site/Sections";

const title = "Berk Bıçakçı — Making sense of what's possible.";
const description =
  "Personal site of Berk Bıçakçı — frontend development, computer science, problem solving and Industrial Engineering, while preparing for university.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Exploring />
        <Impact />
        <Learning />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
