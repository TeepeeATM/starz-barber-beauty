export const bookingUrl = "https://booksy.com/en-us/1057189_starz-barber-beauty_barber-shop_25680_horn-lake";

export const services = [
  { group: "Haircuts", name: "Adult haircut with shave", price: "$50", time: "55 min", note: "Cut, finished neckline and a clean razor shave." },
  { group: "Haircuts", name: "Adult haircut", price: "$40", time: "40 min", note: "Clipper or shear work with a crisp finish; no shave." },
  { group: "Haircuts", name: "Youth haircut", price: "$30", time: "35 min", note: "A patient, age-appropriate cut for younger clients." },
  { group: "Haircuts", name: "Youth haircut with shave", price: "$35", time: "45 min", note: "Youth cut with razor detailing where appropriate." },
  { group: "Detail work", name: "Adult line-up & taper", price: "$30", time: "30 min", note: "Edges, temples and neckline refreshed between full cuts." },
  { group: "Detail work", name: "Adult line-up & taper with shave", price: "$40", time: "40 min", note: "A full edge refresh finished with a razor shave." },
  { group: "Detail work", name: "Youth line-up & taper", price: "$25+", time: "30 min", note: "A quick shape-up for school days, photos and weekends." },
  { group: "Beard & shave", name: "Beard trim", price: "$25", time: "30 min", note: "Balanced length, cheek lines and a defined neckline." },
  { group: "Beard & shave", name: "Razor shave", price: "$25", time: "30 min", note: "A close, careful shave with clean finishing work." },
  { group: "Beard & shave", name: "Shaved head", price: "$40", time: "40 min", note: "Smooth head shave with detailed cleanup." },
  { group: "Beard & shave", name: "Beard trim with color", price: "$35", time: "45 min", note: "Shape and tone combined for a fuller, even finish." },
  { group: "Beard & shave", name: "Beard maintenance shampoo", price: "$15", time: "20 min", note: "A focused cleanse before grooming or between appointments." },
  { group: "Color & natural hair", name: "Hair color with conditioning", price: "$30+", time: "1 hr", note: "Color service with conditioning; final price follows consultation." },
  { group: "Color & natural hair", name: "Loc style only", price: "$40+", time: "1 hr", note: "Shampoo and loc styling; length and design affect final price." },
  { group: "Finishing touches", name: "Eyebrow arch", price: "$20", time: "20 min", note: "Careful shaping to clean up and balance the brow." },
  { group: "Finishing touches", name: "Eyebrow tint", price: "$15", time: "20 min", note: "Subtle tinting to add definition." },
];

export const gallery = ["03","07","09","15","18","20","21","22","24","27","30","31","32","33","36","44"].map((n, i) => ({ src: `/images/gallery/${n}-starz-work.jpeg`, alt: ["Fresh taper and beard detail","Precision fade finished at Starz","Clean youth haircut","Loc styling and finish"][i % 4] }));
