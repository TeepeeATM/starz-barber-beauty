import Image from "next/image";
import Link from "next/link";
import { bookingUrl, gallery } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceList } from "@/components/ServiceList";

export default function Home() { return <>
  <section className="hero"><div className="hero-image"><Image src="/images/IMG_2947.jpeg" alt="J. Wise shaping a client's beard at Starz" fill priority sizes="100vw"/></div><div className="hero-shade"/><div className="hero-lines" aria-hidden="true"><span/><span/><span/></div><div className="hero-copy"><p className="eyebrow">Horn Lake, Mississippi · Since 2008</p><h1>Enter as clients.<br/><em>Leave as friends.</em></h1><p className="lede">Family-friendly barber and beauty services at 1731 Dancy Boulevard.</p><div className="actions"><a className="button" href={bookingUrl}>Book Appointment</a><Link className="text-link light" href="/services">Services &amp; prices →</Link></div><div className="proof"><span><strong>4.9</strong> on Google</span><span>Kids welcome</span></div></div><span className="scroll-cue" aria-hidden="true">Scroll <i/></span></section>
  <section className="section wrap"><SectionHeading title="Popular appointments" copy="See prices and appointment times before you book."/><ServiceList limit={6}/><Link className="button button-outline" href="/services">See all services</Link></section>
  <section className="split dark"><div className="split-image"><Image src="/images/IMG_2950.jpeg" alt="Precise razor work during a haircut at Starz" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="split-copy"><h2>We take the time to get the cut right.</h2><p>We pay attention to your hairline, growth pattern and how you want to wear your cut. Tell us what you’re looking for, and we’ll handle the details.</p><Link className="text-link light" href="/about">Meet Starz →</Link></div></section>
  <section className="section wrap"><SectionHeading title="Recent cuts and styles"/><div className="gallery-preview">{gallery.slice(0,6).map((g,i)=><div className={`gallery-tile tile-${i}`} key={g.src}><Image src={g.src} alt={g.alt} fill sizes="(max-width: 600px) 50vw, 33vw"/></div>)}</div><Link className="button button-outline" href="/gallery">See more work</Link></section>
  <section className="family wrap"><div><h2>Horn Lake has trusted Starz since 2008.</h2><p>Parents bring the kids, longtime clients come back for their regular cuts, and new clients are always welcome to ask questions before we start.</p><div className="amenities"><span>Accessible entrance</span><span>Cards accepted</span><span>Wi-Fi available</span></div></div><Image src="/images/IMG_3188.jpeg" alt="Family-friendly waiting area inside Starz" width={900} height={1200}/></section>
  <section className="visit-cta"><h2>Ready to book?</h2><p>Choose your service and an available time.</p><a className="button" href={bookingUrl}>Book Appointment</a></section>
  </>; }

