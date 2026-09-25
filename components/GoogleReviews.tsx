"use client";
import { useEffect, useState } from "react";
const googleReviews=[
{name:"Marissa G.",text:"The team treated her son with kindness, restored his confidence and gave him a haircut he loved."},
{name:"Robby P.",text:"Friendly atmosphere, professional barbers and careful work made James his new go-to barber."},
{name:"Monte E.",text:"He was welcomed as soon as he walked in and left happy with both his fade and beard."},
{name:"Freda B.",text:"She enjoyed the shop’s back-to-school event, including free hairstyles, supplies, games and gifts."},
{name:"Shawn S.",text:"He praised Tye’s consistent work and the relaxed environment J. Wise has built at the shop."},
{name:"Denise C.",text:"She found the shop clean, enjoyed her visit and loved how her hair turned out."},
{name:"Jacquelin W.",text:"She has trusted James Wise with her son’s hair for more than fourteen years."},
{name:"Christopher B.",text:"He described the shop as friendly and the service as excellent."},
{name:"Michael R.",text:"He highlighted the atmosphere and customer service."},
{name:"Joe S.",text:"He was accommodated as a walk-in, liked his cut and planned to return."}
];
const googleUrl="https://www.google.com/maps/search/?api=1&query=Starz+Barber+%26+Beauty+1731+Dancy+Blvd+Horn+Lake+MS+38637";
export function GoogleReviews(){const[active,setActive]=useState(0);const show=(next:number)=>setActive((next+googleReviews.length)%googleReviews.length);useEffect(()=>{const timer=window.setInterval(()=>setActive(current=>(current+1)%googleReviews.length),6000);return()=>window.clearInterval(timer)},[]);const review=googleReviews[active];return <section className="reviews-section"><div className="review-stage wrap"><div className="reviews-intro"><p className="google-rating"><strong>4.9</strong><span aria-label="five stars">★★★★★</span> on Google</p><h2>Reviews from the community</h2><p>Public Google review highlights from Starz clients in Horn Lake.</p><a href={googleUrl} target="_blank" rel="noreferrer">Read all reviews on Google →</a></div><article className="review-feature" key={active}><span className="review-count">{String(active+1).padStart(2,"0")} / {googleReviews.length}</span><span className="review-stars" aria-hidden="true">★★★★★</span><p>{review.text}</p><strong>{review.name}</strong><small>Google review</small></article></div><div className="review-nav wrap"><button onClick={()=>show(active-1)} aria-label="Previous review">← Previous</button><div>{googleReviews.map((item,index)=><button className={index===active?"active":""} onClick={()=>show(index)} aria-label={`Show review ${index+1}`} key={item.name}/>)}</div><button onClick={()=>show(active+1)} aria-label="Next review">Next →</button></div></section>}

