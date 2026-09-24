import Link from "next/link";
import Image from "next/image";
import { bookingUrl } from "@/data/site";

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand brand-mark" aria-label="Starz Barber and Beauty home"><Image src="/brand/starz-logo.png" alt="Starz Barber and Beauty" width={280} height={112} priority/></Link>
    <nav aria-label="Main navigation"><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Visit</Link></nav>
    <details className="mobile-menu"><summary>Menu</summary><div><Link href="/services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/about">About</Link><Link href="/contact">Visit</Link></div></details>
    <a className="button button-small" href={bookingUrl}>Book Appointment</a>
  </header>;
}

