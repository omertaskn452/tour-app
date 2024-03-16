import { nanoid } from "nanoid";

export default [
  {
    name: "Recommended Tours",
    id: nanoid(),
    isOpen: false,
    tours: [
      "Muğla - Dalaman",
      "Muğla - Bodrum",
      "Muğla - Fethiye",
      "Muğla - Ölüdeniz",
      "Muğla - Akyaka"
    ],
    expo: "The cheapest and best tours for you are here. These tours, selected by Our Well-qualified Guides, offer the best opportunities for people who love to travel",
    img: "img/sea imgs/sea3.jpg"
  },
  {
    name: "Private Tours",
    id: nanoid(),
    isOpen: false,
    tours: [
      "Antalya - Kemer",
      "Antalya - Konyaaltı",
      "Antalya - Alanya",
      "Antalya - Kaleiçi",
      "Antalya - Olymposs Ancient City"
    ],
    expo: "These private tours offers to you unique experiences. Check out our opportunities to experience many different things you have never done or seen before",
    img: "img/sea imgs/sea2.jpg"
  },
  {
    name: "Excursions",
    id: nanoid(),
    isOpen: false,
    tours: [
      "Knidos Ancient City",
      "Bodrum Amphitheater",
      "Dalyan River",
      "Ölüdeniz",
      "Düden Waterfalls",
      "Kaleiçi",
      "Konyaaltı Beach",
      "Sapadere Canyon"
    ],
    expo: "Browse our wide range of tour deals. From cheap to expensive, from one-night to 1-month tours, choose the best tour for you",
    img: "img/sea imgs/sea1.jpg"
  }
]