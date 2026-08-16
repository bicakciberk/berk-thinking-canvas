import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { HeroVisual } from "./HeroVisual";

const EMAIL = "bicakciberk@outlook.com";

const socials = [
  { label: "GitHub", href: "https://github.com/bicakciberk" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bicakciberk/" },
  { label: "Instagram", href: "https://www.instagram.com/berkbicakci/" },
  { label: "Goodreads", href: "https://www.goodreads.com/bicakciberk" },
  { label: "Letterboxd", href: "https://letterboxd.com/berkbicakci/" },
  { label: "Spotify", href: "https://open.spotify.com/user/31ecvyd5bcpm2rajwrddanux3l44" },
];

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="mx-auto max-w-[1180px] px-5 pt-12 pb-20 sm:px-8 sm:pt-16 sm:pb-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p data-reveal className="label-xs">
            About
          </p>
          <h2
            data-reveal
            className="mt-4 font-serif text-[30px] leading-[1.15] sm:text-[38px] md:sticky md:top-24"
          >
            Not just a title.
            <br />
            <span className="text-teal italic">A way of looking.</span>
          </h2>
        </div>

        <div className="space-y-6 text-[17px] leading-[1.75] md:col-span-7 md:col-start-6 md:text-[18px]">

          <p data-reveal>
            Hi, I'm Berk. I enjoy learning how things work — and then finding better ways to make
            them work. So far that has taken me from frontend development and coding projects into
            computer science, project management, and now Industrial Engineering.
          </p>
          <p data-reveal>
            I like building things with code, but what actually holds my attention is the problem
            behind what I'm building. Breaking a complicated idea into smaller pieces, learning from
            the process, turning that into something useful — that loop is the part I keep coming
            back to.
          </p>
          <p data-reveal className="border-l-2 border-coral pl-5 text-muted-foreground">
            Through volunteering with Catchafire I've been able to use my technical skills on
            projects with a social impact.
          </p>
          <p data-reveal>
            Right now I'm preparing for university and looking forward to discovering new fields,
            meeting interesting people, and figuring out where my curiosity takes me next.
          </p>
        </div>
      </div>
    </section>
  );
}

const exploring = [
  {
    n: "01",
    title: "Frontend Development",
    body: "Where I started. I like the immediacy of it — you change something and see it a second later. JavaScript and React are what I keep practising with.",
  },
  {
    n: "02",
    title: "Computer Science",
    body: "The part underneath the code. I'm working through the fundamentals because knowing why something works makes the building far less guesswork.",
  },
  {
    n: "03",
    title: "Project Management",
    body: "Mostly about people and sequencing. How a large thing gets split into pieces small enough to actually finish, and who needs to know what.",
  },
  {
    n: "04",
    title: "Industrial Engineering",
    body: "The newest one, and the reason I'm preparing for university. It looks at whole systems rather than single parts — that framing fits how I already think.",
  },
];

export function Exploring() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="exploring"
      ref={ref}
      className="border-y border-rule/70 bg-paper/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <h2 data-reveal className="max-w-xl font-serif text-[28px] leading-tight sm:text-[36px]">
          Things I'm curious about right now
        </h2>

        <ul className="mt-14 space-y-0">
          {exploring.map((item, i) => (
            <li
              key={item.n}
              data-reveal
              className="grid gap-2 border-t border-rule/70 py-8 sm:grid-cols-12 sm:gap-6"
            >
              <span
                className="font-serif text-[13px] text-coral sm:col-span-1"
                style={{ paddingLeft: `${i * 4}px` }}
              >
                {item.n}
              </span>
              <h3 className="font-serif text-[22px] leading-snug sm:col-span-4 sm:text-[24px]">
                {item.title}
              </h3>
              <p className="max-w-[48ch] text-[16.5px] leading-[1.7] text-muted-foreground sm:col-span-6 sm:col-start-7 sm:text-[17px]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Impact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="impact" ref={ref} className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 sm:py-36">
      <p data-reveal className="label-xs">
        Impact
      </p>
      <div className="mt-6 grid items-end gap-4 md:grid-cols-12 md:gap-6">
        <p
          data-reveal
          className="font-serif text-[64px] leading-[0.9] tracking-tight sm:text-[110px] md:col-span-7 lg:text-[140px]"
        >
          $9,136<span className="text-teal">+</span>
        </p>
        <div className="border-t border-rule/70 pt-4 md:col-span-5 md:col-start-8 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <p data-reveal className="max-w-[34ch] text-[17px] leading-[1.6] text-muted-foreground">
            Social impact generated through Catchafire volunteer projects.
          </p>
          <a
            data-reveal
            href="https://www.catchafire.org/profiles/3330056/about"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-[16px] text-teal link-underline"
          >
            Catchafire profile
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>

    </section>
  );
}

const certificates = [
  {
    title: "International Computer Science Competition",
    org: "ICSC",
    href: "https://icscompetition.org/c/PerformanceReport-PR-2025-FF7A6D7C715-a2ad1d60c92ccd080b52694f1f6419c2.pdf?t=1768045252",
  },
  {
    title: "Introduction to Computer Science and Programming",
    org: "University of London",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/8IPWBRV5511I",
  },
  {
    title: "Beginner Frontend Web Development Path",
    org: "Patika.dev",
    href: "https://academy.patika.dev/certificates/2cc23083",
  },
  {
    title: "Front-End Development",
    org: "Meta",
    href: "https://www.coursera.org/account/accomplishments/certificate/BNZ5H8C2WOYP",
  },
];

export function Learning() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="learning"
      ref={ref}
      className="border-y border-rule/70 bg-paper/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <h2 data-reveal className="font-serif text-[28px] leading-tight sm:text-[36px]">
          Some things I've learned so far
        </h2>
        <ul className="mt-12 max-w-3xl">
          {certificates.map((c) => (
            <li key={c.title} data-reveal className="border-t border-rule/70">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <span>
                  <span className="font-serif text-[20px] leading-snug transition-colors group-hover:text-teal sm:text-[23px]">
                    {c.title}
                  </span>
                  <span className="mt-1 block text-[14px] text-muted-foreground">{c.org}</span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-teal"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const interests = [
  "Swimming",
  "Reading",
  "Video Games",
  "Travelling",
  "Coffee",
  "Chess",
  "Winter",
];

export function BeyondCode() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="beyond" ref={ref} className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-8 md:grid-cols-12">
        <h2
          data-reveal
          className="font-serif text-[28px] leading-tight sm:text-[36px] md:col-span-4"
        >
          When I'm not
          <br />
          at a screen
        </h2>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-4 md:col-span-7 md:col-start-6">
          {interests.map((t, i) => (
            <li
              key={t}
              data-reveal
              className="border-b border-rule px-1 pb-1 text-[16px] transition-colors hover:border-teal hover:text-teal"
              style={{ transform: `translateY(${(i % 3) * 4}px)` }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="contact"
      ref={ref}
      className="border-t border-rule/70 px-5 py-24 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          data-reveal
          className="font-serif text-[42px] leading-[1.05] tracking-tight sm:text-[76px] lg:text-[92px]"
        >
          Have a good
          <br />
          question<span className="text-coral">?</span>
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p data-reveal className="max-w-[42ch] text-[16px] text-muted-foreground md:col-span-5">
            Ask it. Questions, ideas, or something you're stuck on — I'm usually pretty open to a
            conversation.
          </p>
          <div className="md:col-span-6 md:col-start-7">
            <a
              data-reveal
              href={`mailto:${EMAIL}`}
              className="inline-block font-serif text-[22px] text-teal link-underline sm:text-[28px]"
            >
              {EMAIL}
            </a>
            <ul
              data-reveal
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-foreground"
            >
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule/70">
      <div className="mx-auto flex max-w-[1180px] items-baseline justify-between px-5 py-8 sm:px-8">
        <span className="font-serif text-[15px]">Berk Bıçakçı</span>
        <span className="text-[13px] text-muted-foreground">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export { HeroVisual };
