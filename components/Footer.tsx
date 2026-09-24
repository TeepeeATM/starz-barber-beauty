import Link from "next/link";
import { bookingUrl } from "@/data/site";

export function Footer() {
  return <footer>
    <div className="footer-main wrap"><div><p className="brand footer-brand"><span>STARZ</span><small>BARBER &amp; BEAUTY</small></p><p>Serving Horn Lake and North Mississippi since 2008.</p></div><div><h2>Visit the shop</h2><p>1731 Dancy Blvd<br/>Horn Lake, MS 38637</p><a href="tel:+19014068988">(901) 406-8988</a></div><div><h2>Appointments</h2><p>See available services and times on Booksy.</p><a href={bookingUrl}>Book on Booksy →</a></div></div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Starz Barber &amp; Beauty</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Shop policies</Link><Link href="/accessibility">Accessibility</Link></div></div>
  </footer>;
}

