import Link from "next/link";
import { bookingUrl } from "@/data/site";

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Starz Barber and Beauty home"><span>STARZ</span><small>BARBER &amp; BEAUTY</small></Link>
    <nav aria-label="Main navigation">
      <Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Visit</Link>
    </nav>
    <details className="mobile-menu"><summary>Menu</summary><div><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Visit</Link></div></details>
    <a className="button button-small" href={bookingUrl}>Book now</a>
  </header>;
}
