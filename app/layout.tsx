import type { Metadata } from "next";
import { Libre_Caslon_Text, Work_Sans } from "next/font/google";
import "./globals.css";
import "./typography.css";
import "./social.css";
import "./hero-carousel.css";
import "./brand.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialRail } from "@/components/SocialRail";

const display = Libre_Caslon_Text({ subsets:["latin"], weight:["400","700"], style:["normal","italic"], variable:"--font-display", display:"swap" });
const body = Work_Sans({ subsets:["latin"], variable:"--font-body", display:"swap" });

export const metadata: Metadata = { title:{default:"Starz Barber & Beauty",template:"%s | Starz Barber & Beauty"},description:"Barber and beauty services in Horn Lake, Mississippi." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${display.variable} ${body.variable}`}><body><a className="skip" href="#main">Skip to content</a><Header/><ScrollReveal/><SocialRail/><main id="main">{children}</main><Footer/></body></html>}

