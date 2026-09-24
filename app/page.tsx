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
      <div className="hero-copy"><p className="lede">Haircuts, beard work, loc styling and beauty services on Dancy Boulevard in Horn Lake.</p><div className="actions"><a className="button" href={bookingUrl}>Book Appointment</a><Link className="text-link light" href="/services">Services &amp; prices →</Link></div><div className="proof"><span><strong>4.9-star</strong> rating on Google</span><span>Serving North Mississippi since 2008</span></div></div>
      <span className="scroll-cue" aria-hidden="true">Scroll <i/></span>
    </section>
    <section className="section wrap" id="services"><SectionHeading title="Main services" copy="Book a full haircut, taper and lineup, beard service, razor shave or youth cut. Every service lists its current price and appointment length before you choose a time."/><ServiceList limit={6}/><Link className="button button-outline" href="/services">See all services</Link></section>
    <section className="split dark" id="master-barber"><div className="split-image"><Image src="/images/IMG_2950.jpeg" alt="J. Wise completing precise razor work at Starz" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="split-copy"><h2>Meet J. Wise, Master Barber</h2><p>J. Wise works with adults and younger clients across full haircuts, tapers, lineups, beard shaping and razor shaves. He starts by asking how you wear your hair between appointments, then adjusts the cut around your hairline, growth pattern and preferred finish. The goal is a cut that looks sharp when you leave and remains easy to maintain afterward.</p><Link className="text-link light" href="/about">More about J. Wise →</Link></div></section>
    <section className="section wrap" id="work"><SectionHeading title="Recent cuts and styles" copy="A closer look at braided styles, loc work, clean lineups and finished cuts completed at Starz."/><div className={styles.workGrid}>{gallery.slice(0,6).map(g=><div className={styles.workImage} key={g.src}><Image src={g.src} alt={g.alt} fill sizes="(max-width: 600px) 50vw, 33vw"/></div>)}</div><Link className="button button-outline" href="/gallery">See more work</Link></section>
    <section className="family wrap" id="shop"><div><h2>A Horn Lake shop built around repeat visits</h2><p>Starz has served Horn Lake and the surrounding North Mississippi community since 2008. Some clients stop in for a taper or lineup; others book a full haircut and beard service. Each visit begins with a clear conversation about the cut and ends with a finish suited to the person in the chair.</p><div className={styles.shopHours}><h3>Shop hours</h3><dl><div><dt>Monday</dt><dd>12–5:30 PM</dd></div><div><dt>Tuesday–Friday</dt><dd>9 AM–1 PM / 2–6 PM</dd></div><div><dt>Saturday</dt><dd>6 AM–2 PM</dd></div><div><dt>Sunday</dt><dd>By appointment</dd></div></dl><Link href="/contact">Address and directions →</Link></div></div><Image className={styles.shopImage} src="/images/IMG_2931.jpeg" alt="Starz Barber and Beauty storefront on Dancy Boulevard" width={1536} height={1152} sizes="(max-width: 800px) 100vw, 45vw"/></section>
    <section className={`${styles.homeMap} wrap`} aria-labelledby="map-heading"><div><h2 id="map-heading">Find Starz on Dancy Boulevard</h2><p>1731 Dancy Blvd, Horn Lake, Mississippi 38637</p></div><iframe title="Google Map showing Starz Barber and Beauty in Horn Lake" src="https://www.google.com/maps?q=1731+Dancy+Blvd+Horn+Lake+MS+38637&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></section>
    <section className="visit-cta"><h2>Choose your service. Pick your time.</h2><p>Current prices and live appointment availability are handled through Booksy.</p><a className="button" href={bookingUrl}>Book Appointment</a></section>
  </>;
}
