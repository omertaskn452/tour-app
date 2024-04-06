import { nanoid } from "nanoid";

export default {
  categories: [
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
      img: "img/sea imgs/sea3.jpg",
      urlName: "recommended-tours"
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
      img: "img/sea imgs/sea2.jpg",
      urlName: "private-tours"
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
      img: "img/sea imgs/sea1.jpg",
      urlName: "excursions"
    },
    {
      name: "Airport Transfer",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet porta urna. Vivamus cursus mattis auctor. Interdum et malesuada.",
      img: "img/stock/transport.jpg",
      urlName: "airport-transfer"
    },
    {
      name: "Rent House",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet porta urna. Vivamus cursus mattis auctor. Interdum et malesuada.",
      img: "img/stock/rent.jpg",
      urlName: "rent-house"
    }
  ],
  tours: [
    {
      name: "Antalya - Kemer",
      img: "img/sea imgs/sea6.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "65$"
    },
    {
      name: "Antalya - Kaleiçi",
      img: "img/sea imgs/sea5.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "75$"
    },
    {
      name: "Muğla - Dalaman",
      img: "img/sea imgs/sea8.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "55$"
    },
    {
      name: "Muğla - Akyaka",
      img: "img/sea imgs/sea9.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "50$"
    },
    {
      name: "Muğla - Ölüdeniz",
      img: "img/sea imgs/sea7.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "65$"
    },
    {
      name: "Antalya - Bodrum",
      img: "img/sea imgs/sea4.jpg",
      id: nanoid(),
      expo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet est.",
      price: "45$"
    },
  ]

}