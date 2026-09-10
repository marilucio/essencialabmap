import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  width?: "narrow" | "wide";
};

export function Section({ id, children, className = "", width = "wide" }: Props) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-6xl";
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto ${max}`}>{children}</div>
    </section>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-bold leading-tight text-slate-900 md:text-4xl ${className}`}>
      {children}
    </h2>
  );
}
