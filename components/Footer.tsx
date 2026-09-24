import Link from "next/link";
import Image from "next/image";
import { bookingUrl } from "@/data/site";

export function Footer() {
  return <footer>
    <div className="footer-main wrap"><div><p className="brand footer-brand brand-mark"><Image src="/brand/starz-logo.png" alt="Starz Barber and Beauty" width={320} height={128}/></p><p>Serving Horn Lake and North Mississippi since 2008.</p></div><div><h2>Shop Location</h2><p>1731 Dancy Blvd<br/>Horn Lake, MS 38637</p><a href="tel:+19014068988">(901) 406-8988</a></div><div><h2>Appointments</h2><p>See available services and times online.</p><a href={bookingUrl}>Book Appointment →</a></div></div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Starz Barber &amp; Beauty</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Shop policies</Link><Link href="/accessibility">Accessibility</Link></div></div>
  </footer>;
}

