import Link from "next/link";
import Image from "next/image";
import { bookingUrl } from "@/data/site";
import styles from "./Header.module.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Shop Location" },
];

export function Header() {
  return <header className={styles.header}>
    <Link href="/" className={styles.logo} aria-label="Starz Barber and Beauty home">
      <Image src="/brand/starz-logo.png" alt="" width={280} height={112} priority/>
    </Link>
    <nav className={styles.desktopNav} aria-label="Main navigation">
      {navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}
    </nav>
    <a className={`button ${styles.desktopBooking}`} href={bookingUrl}>Book Appointment</a>
    <details className={styles.mobileMenu}>
      <summary aria-label="Open navigation menu"><span>Menu</span><i aria-hidden="true"/><i aria-hidden="true"/></summary>
      <nav aria-label="Mobile navigation">
        {navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        <a className="button" href={bookingUrl}>Book Appointment</a>
      </nav>
    </details>
  </header>;
}
