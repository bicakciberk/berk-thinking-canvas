import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/useReveal";

/**
 * A small personal thinking map: the things Berk is actually learning,
 * all circling the same question — how does this work.
 */
const nodes = [
  { x: 96, y: 54, tx: 96, ty: 38, anchor: "middle" as const, t: "Frontend", c: "text-coral" },
  { x: 300, y: 82, tx: 312, ty: 76, anchor: "start" as const, t: "Python", c: "text-teal" },
  {
    x: 322,
    y: 208,
    tx: 334,
    ty: 212,
    anchor: "start" as const,
    t: "Computer Science",
    c: "text-teal",
  },
  {
    x: 214,
    y: 292,
    tx: 214,
    ty: 314,
    anchor: "middle" as const,
    t: "Industrial Engineering",
    c: "text-yellow",
  },
  {
    x: 62,
    y: 232,
    tx: 50,
    ty: 238,
    anchor: "end" as const,
    t: "Problem solving",
    c: "text-coral",
  },
];

export function HeroVisual({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<SVGPathElement>("[data-draw]").forEach((p) => {
        const len = p.getTotalLength();
        gsap.fromTo(
          p,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", delay: 0.5 },
        );
      });
      gsap.fromTo(
        el.querySelectorAll("[data-node]"),
        { opacity: 0, scale: 0.6, transformOrigin: "center" },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 0.9, ease: "power2.out" },
      );
      gsap.fromTo(
        el.querySelectorAll("[data-label]"),
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, delay: 1.05 },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="-46 8 492 348"
      role="img"
      aria-label="A small hand-drawn map: frontend, Python, computer science, problem solving and industrial engineering all circling the same question — how does this work."
      className={className}
      fill="none"
    >
      {/* the one loose circle everything sits on */}
      <path
        data-draw
        d="M196 44 C 292 52, 344 118, 330 196 C 316 276, 240 318, 160 300 C 84 284, 42 214, 62 146 C 80 84, 136 40, 196 44"
        stroke="currentColor"
        className="text-foreground/25"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* two quiet connectors across the middle */}
      <g stroke="currentColor" className="text-rule" strokeWidth="1" strokeLinecap="round">
        <path data-draw d="M96 54 C 160 120, 220 150, 322 208" />
        <path data-draw d="M62 232 C 140 214, 190 176, 300 82" />
      </g>

      {/* centre */}
      <g data-node>
        <circle cx="196" cy="172" r="46" fill="currentColor" className="text-background" />
        <circle cx="196" cy="172" r="46" stroke="currentColor" className="text-foreground/45" />
      </g>
      <text
        data-label
        x="196"
        y="168"
        textAnchor="middle"
        className="fill-foreground font-serif italic"
        fontSize="15"
      >
        how does
      </text>
      <text
        data-label
        x="196"
        y="187"
        textAnchor="middle"
        className="fill-foreground font-serif italic"
        fontSize="15"
      >
        this work
      </text>

      {nodes.map((n) => (
        <g key={n.t}>
          <circle data-node cx={n.x} cy={n.y} r="4.5" className={`fill-current ${n.c}`} />
          <text
            data-label
            x={n.tx}
            y={n.ty}
            textAnchor={n.anchor}
            className="fill-muted-foreground font-sans"
            fontSize="12"
            letterSpacing="0.06em"
          >
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
