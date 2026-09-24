import { services } from "@/data/site";
export function ServiceList({ limit }: { limit?: number }) {
  const rows = limit ? services.slice(0, limit) : services;
  return <div className="service-list">{rows.map(s => <article className="service-row" key={s.name}><div><h3>{s.name}</h3><p>{s.note}</p></div><div className="service-meta"><strong>{s.price}</strong><span>{s.time}</span></div></article>)}</div>;
}
