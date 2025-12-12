import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
      {children}
    </section>
  );
}
