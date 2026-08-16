import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/theme";

const links = [
  { href: "#about", label: "About" },
  { href: "#learning", label: "Learning" },
  { href: "#impact", label: "Impact" },
  { href: "#beyond", label: "Beyond Code" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-background/85 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="font-serif text-[17px] tracking-tight">
          Berk Bıçakçı
        </a>

        <div className="flex items-center gap-1 sm:gap-5">
          <ul className="hidden items-center gap-6 text-[14px] text-muted-foreground md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 bg-background px-5 pt-6 md:hidden">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-rule/70">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 font-serif text-2xl"
                >
                  <span className="label-xs">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:bicakciberk@outlook.com"
            className="mt-8 inline-block text-[15px] text-teal link-underline"
          >
            bicakciberk@outlook.com
          </a>
        </div>
      )}
    </header>
  );
}
