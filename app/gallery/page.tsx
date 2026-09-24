import type { Metadata } from "next";
import Image from "next/image";
import { bookingUrl,gallery } from "@/data/site";

export const metadata:Metadata={title:"Gallery",description:"Recent haircuts, fades, beard work and natural styles finished at Starz Barber & Beauty."};

export default function Gallery(){return <><section className="page-hero"><h1>Recent cuts and styles</h1><p>Braided styles, loc work, sharp lineups and finished cuts completed in the Starz shop.</p></section><section className="gallery-grid wrap">{gallery.map((g,i)=><figure className={`work-${i%5}`} key={g.src}><Image src={g.src} alt={g.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"/></figure>)}</section><section className="visit-cta compact"><h2>See something close to what you want?</h2><p>Choose the service that fits, then select an available appointment.</p><a className="button" href={bookingUrl}>Book Appointment</a></section></>}
