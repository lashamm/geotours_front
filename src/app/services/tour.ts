import { Injectable } from '@angular/core';

export interface Tour {
  id: number;
  title: string;
  region: string;
  duration: string;
  price: number;
  image: string;
  images?: string[];
  cuisine?: string[];
  tag: string;
  shortDescription: string;
  highlights: string[];
  groupSize: string;
}

@Injectable({ providedIn: 'root' })
export class TourService {

  private tours: Tour[] = [
    {
      id: 1,
      title: 'Svaneti Mountain Expedition',
      region: 'Svaneti',
      duration: '7 Days',
      price: 1890,
      image: 'assets/imgs/regions/svaneti/mestia-3.jpg',
      images: [
        'assets/imgs/regions/svaneti/mestia-3.jpg',
        'assets/imgs/regions/svaneti/mestia.jpg',
        'assets/imgs/regions/svaneti/mestia-cross.jpg',
        'assets/imgs/regions/svaneti/ushba.jpeg',
        'assets/imgs/regions/svaneti/svaneti-night.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/svaneti/cuisine/tashmijabi.jpg',
        'assets/imgs/regions/svaneti/cuisine/svanuri-kubdari.webp',
        'assets/imgs/regions/svaneti/cuisine/chvishtari.jpg',
      ],
      tag: 'Mountains',
      shortDescription: 'Trek through ancient Svan towers and glacial valleys at the roof of the Caucasus.',
      highlights: ['Mestia to Ushguli trek', 'UNESCO Svan towers', 'Shkhara glacier viewpoint', 'Local Svan family homestay'],
      groupSize: '2–8 guests'
    },
    {
      id: 2,
      title: 'Kakheti Wine & Culture',
      region: 'Kakheti',
      duration: '4 Days',
      price: 980,
      image: 'assets/imgs/regions/kakheti/sighnaghi.jpg',
      images: [
        'assets/imgs/regions/kakheti/sighnaghi.jpg',
        'assets/imgs/regions/kakheti/davit-gareja.jpg',
        'assets/imgs/regions/kakheti/nekresi.jpg',
        'assets/imgs/regions/kakheti/gurjaani-kvelatsminda.jpg',
        'assets/imgs/regions/kakheti/kvareli.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/kakheti/cuisine/kakhuri-wine.jpg',
        'assets/imgs/regions/kakheti/cuisine/qvevri-wine.jpg',
        'assets/imgs/regions/kakheti/cuisine/kakhuri-mtsvadi.jpg',
        'assets/imgs/regions/kakheti/cuisine/kakhuri-shoti.jpg',
        'assets/imgs/regions/kakheti/cuisine/kakhuri-sweets.webp',
        'assets/imgs/regions/kakheti/cuisine/khashlama.jpeg',
      ],
      tag: 'Wine',
      shortDescription: 'Explore Georgia\'s oldest wine region, harvest grapes in ancient vineyards, and master qvevri winemaking.',
      highlights: ['Private winery tastings in Telavi', 'Alazani valley vineyard walk', 'Alaverdi Monastery visit', 'Traditional feast (supra)'],
      groupSize: '2–6 guests'
    },
    {
      id: 3,
      title: 'Tbilisi Old Town Immersion',
      region: 'Tbilisi',
      duration: '3 Days',
      price: 650,
      image: 'assets/imgs/regions/tbilisi/old-tbilisi.png',
      images: [
        'assets/imgs/regions/tbilisi/old-tbilisi.png',
        'assets/imgs/regions/tbilisi/mtatsminda.jpg',
        'assets/imgs/regions/tbilisi/sameba.jpg',
        'assets/imgs/regions/tbilisi/tbilisi-night.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/tbilisi/cuisine/georgian-bread-and-salt.jpg',
      ],
      tag: 'Culture',
      shortDescription: 'Wander sulfur bath districts, frescoed churches, and rooftop terraces of this ancient crossroads city.',
      highlights: ['Narikala fortress sunrise', 'Abanotubani sulfur baths', 'Caravanserai wine dinner', 'Vernissage artisan market'],
      groupSize: '2–10 guests'
    },
    {
      id: 4,
      title: 'Kazbegi & The Military Highway',
      region: 'Kazbegi',
      duration: '3 Days',
      price: 720,
      image: 'assets/imgs/regions/mtskheta-mtianeti/gergeti-trinity.jpg',
      images: [
        'assets/imgs/regions/mtskheta-mtianeti/gergeti-trinity.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/kazbegi.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/ananuri-castle.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/aragvi-valley.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/gudauri.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/svetitskhoveli.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/shio-mghvime.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/mtskheta-mtianeti/cuisine/khinkali.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/cuisine/khinkali-on-fire.jpeg',
        'assets/imgs/regions/mtskheta-mtianeti/cuisine/dambal-khacho.jpg',
        'assets/imgs/regions/mtskheta-mtianeti/cuisine/mtskheta-gvezeli.webp',
      ],
      tag: 'Mountains',
      shortDescription: 'Drive the legendary Georgian Military Highway to Gergeti Trinity Church, perched above the clouds.',
      highlights: ['Gergeti Trinity Church hike', 'Mt. Kazbek views', 'Ananuri castle complex', 'Gudauri mountain lunch'],
      groupSize: '2–8 guests'
    },
    {
      id: 5,
      title: 'Vardzia Cave City & Borjomi Spa',
      region: 'Samtskhe-Javakheti',
      duration: '4 Days',
      price: 890,
      image: 'assets/imgs/regions/samtskhe-javakheti/vardzia.jpg',
      images: [
        'assets/imgs/regions/samtskhe-javakheti/vardzia.jpg',
        'assets/imgs/regions/samtskhe-javakheti/borjomi-park.jpg',
        'assets/imgs/regions/samtskhe-javakheti/rabati.jpg',
        'assets/imgs/regions/samtskhe-javakheti/sapara-monastery.jpg',
        'assets/imgs/regions/samtskhe-javakheti/matskhane-monastery.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/samtskhe-javakheti/cuisine/meskhi-khachapuri.png',
        'assets/imgs/regions/samtskhe-javakheti/cuisine/meskhi-kada.jpg',
        'assets/imgs/regions/samtskhe-javakheti/cuisine/tenili-cheese.jpg',
      ],
      tag: 'Heritage',
      shortDescription: 'Explore the rock-hewn cave monastery of Vardzia, then rejuvenate in legendary Borjomi mineral springs.',
      highlights: ['Vardzia cave city exploration', 'Borjomi mineral water park', 'Rabati Castle', 'Green Monastery at Sapara'],
      groupSize: '2–8 guests'
    },
    {
      id: 6,
      title: 'Adjara Black Sea & Highlands',
      region: 'Adjara',
      duration: '4 Days',
      price: 850,
      image: 'assets/imgs/regions/adjara/batumi.jpg',
      images: [
        'assets/imgs/regions/adjara/batumi.jpg',
        'assets/imgs/regions/adjara/black-sea-coast.jpg',
        'assets/imgs/regions/adjara/gonio.jpg',
        'assets/imgs/regions/adjara/gonio-fortress.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/adjara/cuisine/adjarian-khachapuri.jpg',
        'assets/imgs/regions/adjara/cuisine/adjarian-baklava.jpg',
        'assets/imgs/regions/adjara/cuisine/barabulka.jpg',
        'assets/imgs/regions/adjara/cuisine/fish-platter.jpg',
      ],
      tag: 'Beach & Mountains',
      shortDescription: 'From Batumi\'s palm-lined boulevards to ancient Greek fortresses and wild Adjarian mountain gorges.',
      highlights: ['Batumi Old Town & boulevard', 'Black Sea sunset cruise', 'Gonio-Apsaros Roman fortress', 'Makhuntseti waterfall hike'],
      groupSize: '2–10 guests'
    },
    {
      id: 7,
      title: 'Imereti Caves & Monasteries',
      region: 'Imereti',
      duration: '3 Days',
      price: 680,
      image: 'assets/imgs/regions/imereti/prometheus-cave.jpg',
      images: [
        'assets/imgs/regions/imereti/prometheus-cave.jpg',
        'assets/imgs/regions/imereti/gelati-monastery.jpg',
        'assets/imgs/regions/imereti/sataplia-reserve.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/imereti/cuisine/imeruli-khachapuri.webp',
        'assets/imgs/regions/imereti/cuisine/tabaka-chicken.jpg',
        'assets/imgs/regions/imereti/cuisine/imeruli-pkhali.webp',
        'assets/imgs/regions/imereti/cuisine/imeruli-surneli.jpeg',
      ],
      tag: 'Culture',
      shortDescription: 'Glittering caves, medieval UNESCO monasteries, and dinosaur footprints in the heartland of Georgia.',
      highlights: ['Prometheus Cave boat ride', 'Gelati Monastery (UNESCO)', 'Sataplia dinosaur reserve', 'Kutaisi old town walk'],
      groupSize: '2–8 guests'
    },
    {
      id: 8,
      title: 'Samegrelo Ancient Colchis',
      region: 'Samegrelo',
      duration: '4 Days',
      price: 920,
      image: 'assets/imgs/regions/samegrelo/martvili.jpg',
      images: [
        'assets/imgs/regions/samegrelo/martvili.jpg',
        'assets/imgs/regions/samegrelo/martvili-2.jpg',
        'assets/imgs/regions/samegrelo/dadiani-palace.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/samegrelo/cuisine/megruli-khachapuri.webp',
        'assets/imgs/regions/samegrelo/cuisine/megruli-kuchmachi.webp',
        'assets/imgs/regions/samegrelo/cuisine/ghomi-and-kharcho.webp',
      ],
      tag: 'Heritage',
      shortDescription: 'Paddle through emerald canyon pools, explore the palace of the last Megrelian princes, and taste Georgia\'s spiciest cuisine.',
      highlights: ['Martvili canyon kayak', 'Dadiani Palace museum', 'Nokalakevi ancient fortress', 'Megrelian feast with local family'],
      groupSize: '2–8 guests'
    },
    {
      id: 9,
      title: 'Kvemo Kartli Canyon Adventure',
      region: 'Kvemo Kartli',
      duration: '3 Days',
      price: 750,
      image: 'assets/imgs/regions/kvemo-kartli/dashbashi-canyon.jpg',
      images: [
        'assets/imgs/regions/kvemo-kartli/dashbashi-canyon.jpg',
        'assets/imgs/regions/kvemo-kartli/dashbashi-glass-bridge.jpg',
        'assets/imgs/regions/kvemo-kartli/kveshi-fortress.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/kvemo-kartli/cuisine/lamb-mtsvadi.jpg',
        'assets/imgs/regions/kvemo-kartli/cuisine/chaqapuli.jpg',
        'assets/imgs/regions/kvemo-kartli/cuisine/guda-cheese.jpg',
      ],
      tag: 'Adventure',
      shortDescription: 'Stand on Georgia\'s glass-floor bridge over Dashbashi Canyon, explore medieval fortresses, and discover the multi-ethnic south.',
      highlights: ['Dashbashi Canyon glass bridge', 'Kveshi Fortress hike', 'Rustavi city tour', 'Multi-ethnic village visit'],
      groupSize: '2–8 guests'
    },
    {
      id: 10,
      title: 'Shida Kartli History & Legends',
      region: 'Shida Kartli',
      duration: '3 Days',
      price: 710,
      image: 'assets/imgs/regions/shida-kartli/uplistsikhe.jpg',
      images: [
        'assets/imgs/regions/shida-kartli/uplistsikhe.jpg',
        'assets/imgs/regions/shida-kartli/uplistsikhe-2.jpg',
        'assets/imgs/regions/shida-kartli/gori-fortress.jpg',
        'assets/imgs/regions/shida-kartli/stalin-museum.jpg',
        'assets/imgs/regions/shida-kartli/stalin-wagon.jpg',
      ],
      cuisine: [
        'assets/imgs/regions/shida-kartli/cuisine/gori-cutlet.jpg',
        'assets/imgs/regions/shida-kartli/cuisine/chakrakina.jpg',
      ],
      tag: 'Heritage',
      shortDescription: 'Walk through a 3,000-year-old cave city, climb a medieval hilltop fortress, and explore the controversial legacy of Stalin\'s birthplace.',
      highlights: ['Uplistsikhe cave city', 'Gori Fortress panorama', 'Stalin Museum & personal railcar', 'Surami Fortress sunset'],
      groupSize: '2–10 guests'
    },
  ];

  getTours(): Tour[] {
    return this.tours;
  }

  getTourById(id: number): Tour | undefined {
    return this.tours.find(t => t.id === id);
  }

  getFeaturedTours(count = 3): Tour[] {
    return this.tours.slice(0, count);
  }
}
