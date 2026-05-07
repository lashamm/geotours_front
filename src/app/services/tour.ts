import { Injectable } from '@angular/core';

export interface Tour {
  id: number;
  title: string;
  region: string;
  duration: string;
  price: number;
  image: string;        // keep this as the primary/cover image
  images?: string[];    // ← add this for the gallery
  tag: string;
  shortDescription: string;
  highlights: string[];
  groupSize: string;
}
@Injectable({ providedIn: 'root' })
export class TourService {

  // ── Static data ─────────────────────────────────────────────────────────────
  // When the backend is ready, replace getTours() with an HttpClient GET call:
  //   return this.http.get<Tour[]>('/api/tours');
  // ────────────────────────────────────────────────────────────────────────────

  private tours: Tour[] = [
    {
      id: 1,
      title: 'Svaneti Mountain Expedition',
      region: 'Svaneti',
      duration: '7 Days',
      price: 1890,
       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      ],
      tag: 'Mountains',
      shortDescription: 'Drive the legendary Georgian Military Highway to Gergeti Trinity Church, perched above the clouds.',
      highlights: ['Gergeti Trinity Church hike', 'Mt. Kazbek views', 'Ananuri castle complex', 'Gudauri mountain lunch'],
      groupSize: '2–8 guests'
    },
    {
      id: 5,
      title: 'Racha Hidden Valley',
      region: 'Racha',
      duration: '5 Days',
      price: 1250,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      ],
      tag: 'Off-the-beaten-path',
      shortDescription: 'Discover Georgia\'s best-kept secret — emerald rivers, walnut forests, and rare Khvanchkara wine.',
      highlights: ['Shaori reservoir kayak', 'Nikortsminda cathedral', 'Wild walnut forest hike', 'Khvanchkara wine estate'],
      groupSize: '2–6 guests'
    },
    {
      id: 6,
      title: 'Vardzia Cave City & Borjomi Spa',
      region: 'Samtskhe-Javakheti',
      duration: '4 Days',
      price: 890,
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      ],
      tag: 'Heritage',
      shortDescription: 'Explore the rock-hewn cave monastery of Vardzia, then rejuvenate in legendary Borjomi mineral springs.',
      highlights: ['Vardzia cave city exploration', 'Borjomi mineral water park', 'Rabati Castle', 'Green Monastery at Sapara'],
      groupSize: '2–8 guests'
    },
    {
      id: 7,
      title: 'Vardzia Cavdsfgdsfgdsfgsdfge City & Borjomi Spa',
      region: 'Samtskhedsgdsfg-Javakheti',
      duration: '4 Dadsfgdsfgdsfgys',
      price: 890,
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      ],
      tag: 'Heritage',
      shortDescription: 'Expdsfgdsfgdsfgdsflore the rock-hewn cave monastery of Vardzia, then rejuvenate in legendary Borjomi mineral springs.',
      highlights: ['Vardzdsfgdsfgia cave city exploration', 'Borjomi mineral water park', 'Rabati Castle', 'Green Monastery at Sapara'],
      groupSize: '2–8 guegdsfgdsfgsts'
    },
    {
      id: 8,
      title: 'testi 123',
      region: 'Samtskhedsgdfsgsfdgdsgdsfg-Javakheti',
      duration: '4 Dadsfgdfgdfsgdsgdfsgsfgdsfgys',
      price: 890,
      image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        
      ],
      tag: 'Heritage',
      shortDescription: 'Expdsfgdsfgdsfgdsflore the rock-hewn cave monastery of Vardzia, then rejuvenate in legendary Borjomi mineral springs.',
      highlights: ['Vardzdsfgdsfgia cave city exploration', 'Borjomi mineral water park', 'Rabati Castle', 'Green Monastery at Sapara'],
      groupSize: '2–8 guegdsfgdsfgsts'
    }
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
