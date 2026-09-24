import "@fontsource/libre-caslon-display";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./globals.css";
import "./mobile-menu.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: { default: "Starz Barber & Beauty | Horn Lake, MS", template: "%s | Starz Barber & Beauty" }, description: "Family-friendly barbering, beard work, color and natural hair services in Horn Lake, Mississippi. Serving North Mississippi since 2008.", metadataBase: new URL("https://starzbarberbeauty.com") };

const schema = { "@context":"https://schema.org", "@type":"HairSalon", name:"Starz Barber & Beauty", address:{"@type":"PostalAddress",streetAddress:"1731 Dancy Blvd",addressLocality:"Horn Lake",addressRegion:"MS",postalCode:"38637"}, telephone:"+1-901-406-8988", priceRange:"$$" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
