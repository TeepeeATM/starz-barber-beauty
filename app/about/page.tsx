import type { Metadata } from "next";
import Image from "next/image";
import { bookingUrl } from "@/data/site";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About", description: "Meet J. Wise and learn about Starz Barber & Beauty in Horn Lake, Mississippi." };

export default function About() {
  return <>
    <section className="page-hero"><h1>About Starz</h1><p>Serving Horn Lake and North Mississippi from the same neighborhood shop since 2008.</p></section>
    <section className="story split"><div className="split-image"><Image src="/images/IMG_2947.jpeg" alt="J. Wise at work inside Starz" fill sizes="(max-width:800px) 100vw,50vw"/></div><div className="split-copy"><h2>J. Wise, Master Barber</h2><p>J. Wise provides adult and youth haircuts, tapers, lineups, beard shaping and razor shaves. He takes time at the beginning of each appointment to understand how the client wears the cut day to day, where the hair naturally grows, and how sharp or natural the final lines should feel.</p><p>That conversation guides the service from the first pass to the final mirror check. Whether the appointment is a complete haircut and shave or a cleanup between cuts, the details receive the same attention.</p><a className="button button-light" href={bookingUrl}>Book with J. Wise</a></div></section>
    <section className={styles.teamComingSoon}><div><h2>Meet the rest of the team</h2><p>Individual profiles for the shop’s barber and beauty professionals are being prepared.</p></div><span>Coming Soon</span></section>
    <section className="profile wrap"><div><h2>Beauty and natural hair services</h2><p>Beyond barbering, the service menu includes hair color with conditioning, loc styling, eyebrow shaping and eyebrow tinting. Current prices and appointment lengths are listed before you book.</p><a className="button button-outline" href={bookingUrl}>View availability</a></div><Image src="/images/IMG_2323.jpeg" alt="Beauty service area inside Starz" width={800} height={1100}/></section>
  </>;
}
