import Image from "next/image";
import Link from "next/link";
import { bookingUrl, gallery } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceList } from "@/components/ServiceList";
import styles from "./home.module.css";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-image hero-carousel">
        <Image className="hero-slide slide-one" src="/images/IMG_2947.jpeg" alt="J. Wise shaping a client's beard at Starz" fill priority sizes="100vw"/>
        <Image className="hero-slide slide-two" src="/images/IMG_2950.jpeg" alt="J. Wise finishing a client's hairline with a razor" fill sizes="100vw"/>
        <Image className="hero-slide slide-three" src="/images/IMG_3189.jpeg" alt="The barber chairs and waiting area inside Starz" fill sizes="100vw"/>
      </div>
      <div className="hero-shade"/><div className="hero-lines" aria-hidden="true"><span/><span/><span/></div>
      <div className="hero-copy"><p className="lede">Barber and beauty services in Horn Lake, Mississippi, serving North Mississippi since 2008.</p><div className="actions"><a className="button" href={bookingUrl}>Book Appointment</a><Link className="text-link light" href="/services">Services &amp; prices →</Link></div><div className="proof"><span><strong>4.9</strong> on Google</span></div></div>
      <span className="scroll-cue" aria-hidden="true">Scroll <i/></span>
    </section>
    <section className="section wrap" id="services"><SectionHeading title="Main services" copy="Haircuts, tapers, beard work and youth services with clear pricing before you book."/><ServiceList limit={6}/><Link className="button button-outline" href="/services">See all services</Link></section>
    <section className="split dark" id="master-barber"><div className="split-image"><Image src="/images/IMG_2950.jpeg" alt="J. Wise completing precise razor work at Starz" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="split-copy"><h2>Meet J. Wise, Master Barber</h2><p>J. Wise works with adults and younger clients across full haircuts, tapers, lineups, beard shaping and razor shaves. He starts by asking how you wear your hair between appointments, then adjusts the cut around your hairline, growth pattern and preferred finish. The goal is a cut that looks sharp when you leave and remains easy to maintain afterward.</p><Link className="text-link light" href="/about">More about J. Wise →</Link></div></section>
    <section className="section wrap" id="work"><SectionHeading title="Recent cuts and styles"/><div className={styles.workGrid}>{gallery.slice(0,6).map(g=><div className={styles.workImage} key={g.src}><Image src={g.src} alt={g.alt} fill sizes="(max-width: 600px) 50vw, 33vw"/></div>)}</div><Link className="button button-outline" href="/gallery">See more work</Link></section>
    <section className="family wrap" id="shop"><div><h2>A Horn Lake shop built around repeat visits</h2><p>Starz has served Horn Lake and the surrounding North Mississippi community since 2008. Some clients stop in for a quick taper or lineup; others book the full haircut and beard service. The approach stays the same: talk through the cut first, work with care, and make sure the finish fits the person in the chair.</p></div><Image className={styles.shopImage} src="/images/IMG_2931.jpeg" alt="Starz Barber and Beauty storefront on Dancy Boulevard" width={1536} height={1152} sizes="(max-width: 800px) 100vw, 45vw"/></section>
    <section className="visit-cta"><h2>Ready to book?</h2><p>Choose your service and an available time.</p><a className="button" href={bookingUrl}>Book Appointment</a></section>
  </>;
}
