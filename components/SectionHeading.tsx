export function SectionHeading({ title, copy }: { title: string; copy?: string }) {
  return <div className="section-heading"><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}

