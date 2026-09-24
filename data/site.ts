export const bookingUrl = "https://booksy.com/en-us/1057189_starz-barber-beauty_barber-shop_25680_horn-lake";

export const services = [
  { group: "Haircuts", name: "Adult haircut with shave", price: "$50", time: "55 min", note: "Haircut, neckline cleanup and razor shave." },
  { group: "Haircuts", name: "Adult haircut", price: "$40", time: "40 min", note: "Clipper or shear cut with a clean finish; no shave." },
  { group: "Haircuts", name: "Youth haircut", price: "$30", time: "35 min", note: "Haircut for kids and younger clients." },
  { group: "Haircuts", name: "Youth haircut with shave", price: "$35", time: "45 min", note: "Youth haircut with razor detailing where appropriate." },
  { group: "Detail work", name: "Adult line-up & taper", price: "$30", time: "30 min", note: "Edges, temples and neckline refreshed between full cuts." },
  { group: "Detail work", name: "Adult line-up & taper with shave", price: "$40", time: "40 min", note: "Line-up and taper finished with a razor shave." },
  { group: "Detail work", name: "Youth line-up & taper", price: "$25+", time: "30 min", note: "A quick shape-up for school days, photos and weekends." },
  { group: "Beard & shave", name: "Beard trim", price: "$25", time: "30 min", note: "Beard trim with cheek lines and neckline cleanup." },
  { group: "Beard & shave", name: "Razor shave", price: "$25", time: "30 min", note: "Close razor shave and cleanup." },
  { group: "Beard & shave", name: "Shaved head", price: "$40", time: "40 min", note: "Smooth head shave with detailed cleanup." },
  { group: "Beard & shave", name: "Beard trim with color", price: "$35", time: "45 min", note: "Beard trim with color for a fuller, even look." },
  { group: "Beard & shave", name: "Beard maintenance shampoo", price: "$15", time: "20 min", note: "Beard shampoo and cleanse." },
  { group: "Color & natural hair", name: "Hair color with conditioning", price: "$30+", time: "1 hr", note: "Color and conditioning. Price may change based on length and service." },
  { group: "Color & natural hair", name: "Loc style only", price: "$40+", time: "1 hr", note: "Shampoo and loc styling. Price may change based on length and style." },
  { group: "Finishing touches", name: "Eyebrow arch", price: "$20", time: "20 min", note: "Eyebrow shaping and cleanup." },
  { group: "Finishing touches", name: "Eyebrow tint", price: "$15", time: "20 min", note: "Eyebrow tint for added definition." },
];

export const gallery = ["07","09","15","18","20","21","22","24","27","30","31","32","33","36","44"].map((n, i) => ({ src: `/images/gallery/${n}-starz-work.jpeg`, alt: ["Braided style finished at Starz","Loc styling and finish","Fresh taper and beard detail","Precision haircut finished at Starz"][i % 4] }));

