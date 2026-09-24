import type { Metadata } from "next";
import "./globals.css";
import "./social.css";
import "./hero-carousel.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialRail } from "@/components/SocialRail";

export const metadata: Metadata = { title:{default:"Starz Barber & Beauty",template:"%s | Starz Barber & Beauty"},description:"Barber and beauty services in Horn Lake, Mississippi." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header/><ScrollReveal/><SocialRail/><main id="main">{children}</main><Footer/></body></html>}

