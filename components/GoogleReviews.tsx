"use client";

import { useEffect, useRef } from "react";

const reviews = [
  { name: "Robby P.", quote: "Friendly atmosphere and staff." },
  { name: "Monte E.", quote: "Great barbershop!" },
  { name: "Freda B.", quote: "Awesome experience." },
  { name: "Jacquelin W.", quote: "Very professional." },
  { name: "Michael R.", quote: "Great atmosphere, great customer service." },
  { name: "Joe S.", quote: "Nice cut and I will go again." },
];

export function GoogleReviews(){
  const rail=useRef<HTMLDivElement>(null);
  const move=(direction:number)=>rail.current?.scrollBy({left:direction*340,behavior:"smooth"});
  useEffect(()=>{const timer=window.setInterval(()=>{const el=rail.current;if(!el)return;const end=el.scrollLeft+el.clientWidth>=el.scrollWidth-8;el.scrollTo({left:end?0:el.scrollLeft+340,behavior:"smooth"})},4500);return()=>window.clearInterval(timer)},[]);
  return <section className="reviews-section">
    <div className="reviews-heading wrap"><div><p className="google-rating"><strong>4.9</strong><span aria-label="five stars">★★★★★</span> Google rating</p><h2>What Horn Lake clients say</h2></div><div className="review-controls"><button onClick={()=>move(-1)} aria-label="Previous reviews">←</button><button onClick={()=>move(1)} aria-label="Next reviews">→</button></div></div>
    <div className="reviews-rail" ref={rail}>{reviews.map(review=><article className="review-card" key={review.name}><span className="review-stars" aria-hidden="true">★★★★★</span><blockquote>“{review.quote}”</blockquote><p>{review.name} · Google review</p></article>)}</div>
  </section>
}

