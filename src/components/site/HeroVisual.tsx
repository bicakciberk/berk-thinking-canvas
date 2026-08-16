import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/useReveal";

/**
 * A "thinking map": curiosity -> learning -> building -> understanding.
 * Nodes are the things Berk is actually learning; the loop back from
 * understanding to curiosity is the point of the drawing.
 */
export function HeroVisual({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const paths = el.querySelectorAll<SVGPathElement>("[data-draw]");
      paths.forEach((p) => {
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
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, delay: 0.9, ease: "back.out(2)" },
      );
      gsap.fromTo(
        el.querySelectorAll("[data-label]"),
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, delay: 1.1 },
      );
      gsap.to(el.querySelector("[data-orbit]"), {
        rotate: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
        transformOrigin: "200px 190px",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 380"
      role="img"
      aria-label="A hand-drawn style map of how Berk learns: curiosity leads to learning, building and understanding, which loops back into curiosity."
      className={className}
      fill="none"
    >
      <g
        stroke="currentColor"
        className="text-rule"
        strokeWidth="1"
        strokeLinecap="round"
        data-orbit
      >
        <circle cx="200" cy="190" r="128" strokeDasharray="2 7" opacity="0.9" />
      </g>

      {/* the loop */}
      <path
        data-draw
        d="M200 62 C 300 78, 336 148, 318 214 C 300 282, 236 322, 176 312 C 104 300, 66 240, 80 174 C 92 116, 140 74, 200 62"
        stroke="currentColor"
        className="text-foreground/35"
        strokeWidth="1.1"
      />

      {/* spokes to the centre */}
      <g stroke="currentColor" className="text-rule" strokeWidth="1">
        <path data-draw d="M200 62 L200 158" />
        <path data-draw d="M318 214 L232 200" />
        <path data-draw d="M176 312 L192 224" />
        <path data-draw d="M80 174 L168 186" />
      </g>

      {/* centre */}
      <g data-node>
        <circle cx="200" cy="190" r="34" fill="currentColor" className="text-paper" />
        <circle cx="200" cy="190" r="34" stroke="currentColor" className="text-foreground/50" />
      </g>
      <text
        data-label
        x="200"
        y="186"
        textAnchor="middle"
        className="fill-foreground font-serif"
        fontSize="13"
      >
        the
      </text>
      <text
        data-label
        x="200"
        y="202"
        textAnchor="middle"
        className="fill-foreground font-serif"
        fontSize="13"
      >
        problem
      </text>

      {/* four stages */}
      {[
        { x: 200, y: 62, t: "Curiosity", c: "text-coral", ax: 200, ay: 44, anchor: "middle" },
        { x: 318, y: 214, t: "Learning", c: "text-teal", ax: 336, ay: 216, anchor: "start" },
        { x: 176, y: 312, t: "Building", c: "text-yellow", ax: 176, ay: 336, anchor: "middle" },
        { x: 80, y: 174, t: "Understanding", c: "text-teal", ax: 62, ay: 176, anchor: "end" },
      ].map((n) => (
        <g key={n.t}>
          <circle data-node cx={n.x} cy={n.y} r="5" className={`fill-current ${n.c}`} />
          <text
            data-label
            x={n.ax}
            y={n.ay}
            textAnchor={n.anchor}
            className="fill-foreground font-sans"
            fontSize="11"
            letterSpacing="0.12em"
          >
            {n.t.toUpperCase()}
          </text>
        </g>
      ))}

      {/* annotations: what is actually being learned */}
      <g className="fill-muted-foreground font-sans" fontSize="10.5">
        <text data-label x="286" y="120">
          Frontend
        </text>
        <text data-label x="300" y="138">
          JavaScript · React
        </text>
        <text data-label x="248" y="290">
          Python
        </text>
        <text data-label x="46" y="112">
          Computer Science
        </text>
        <text data-label x="34" y="248">
          Problem solving
        </text>
        <text data-label x="120" y="352">
          Industrial Engineering
        </text>
      </g>

      <g stroke="currentColor" className="text-rule" strokeWidth="0.9">
        <path data-draw d="M282 126 L246 148" />
        <path data-draw d="M256 282 L228 250" />
        <path data-draw d="M108 118 L136 152" />
        <path data-draw d="M96 242 L134 224" />
        <path data-draw d="M170 344 L172 322" />
      </g>

      <text
        data-label
        x="336"
        y="344"
        textAnchor="end"
        className="fill-muted-foreground font-serif italic"
        fontSize="12"
      >
        it starts over, every time
      </text>
    </svg>
  );
}
