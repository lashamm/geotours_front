import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService, Tour } from '../../services/tour';
import { TourCardComponent } from '../../shared/tour-card/tour-card';
import { LanguageService, LangCode } from '../../services/language.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, RouterLink, TourCardComponent],
  templateUrl: './tours.html',
  styleUrls: ['./tours.scss']
})
export class ToursComponent implements OnInit {

  tours: Tour[] = [];
  language: LangCode = 'en';

  constructor(private tourService: TourService, private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  ngOnInit() {
    this.tours = this.tourService.getTours();
  }

  get T() {
    const map: Record<LangCode, {
      label: string; title: string; sub: string;
      ctaTitle: string; ctaText: string; ctaBtn: string;
    }> = {
      en: {
        label: 'Our Tours',
        title: 'All Tours',
        sub: 'Tours across Georgia — mountains, monasteries, wine regions and ancient cities.',
        ctaTitle: "Don't see what you need?",
        ctaText: 'We can plan a custom trip just for you.',
        ctaBtn: 'Request a Custom Tour'
      },
      geo: {
        label: 'ჩვენი ტურები',
        title: 'ყველა ტური',
        sub: 'ტურები საქართველოში — მთები, მონასტრები, ღვინის რეგიონები და ძველი ქალაქები.',
        ctaTitle: 'ვერ იპოვეთ სასურველი ტური?',
        ctaText: 'ჩვენ შეგვიძლია დაგიგეგმოთ ინდივიდუალური მოგზაურობა.',
        ctaBtn: 'ინდივიდუალური ტური'
      },
      ru: {
        label: 'Наши туры',
        title: 'Все туры',
        sub: 'Туры по Грузии — горы, монастыри, винные регионы и старые города.',
        ctaTitle: 'Не нашли нужный тур?',
        ctaText: 'Мы можем спланировать поездку специально для вас.',
        ctaBtn: 'Индивидуальный тур'
      },
      ar: {
        label: 'جولاتنا',
        title: 'جميع الجولات',
        sub: 'جولات في جورجيا — الجبال والأديرة ومناطق النبيذ والمدن القديمة.',
        ctaTitle: 'لم تجد ما تريد؟',
        ctaText: 'يمكننا تخطيط رحلة خاصة لك.',
        ctaBtn: 'اطلب جولة خاصة'
      },
      es: {
        label: 'Nuestros tours',
        title: 'Todos los tours',
        sub: 'Tours por Georgia — montañas, monasterios, regiones vinícolas y ciudades antiguas.',
        ctaTitle: '¿No encuentras lo que necesitas?',
        ctaText: 'Podemos planificar un viaje personalizado para ti.',
        ctaBtn: 'Pedir tour personalizado'
      },
      fr: {
        label: 'Nos tours',
        title: 'Tous les tours',
        sub: 'Tours en Géorgie — montagnes, monastères, régions viticoles et villes anciennes.',
        ctaTitle: 'Vous ne trouvez pas ce qu\'il vous faut ?',
        ctaText: 'Nous pouvons planifier un voyage sur mesure pour vous.',
        ctaBtn: 'Demander un tour sur mesure'
      },
      it: {
        label: 'I nostri tour',
        title: 'Tutti i tour',
        sub: 'Tour in Georgia — montagne, monasteri, regioni vinicole e città antiche.',
        ctaTitle: 'Non trovi quello che cerchi?',
        ctaText: 'Possiamo pianificare un viaggio su misura per te.',
        ctaBtn: 'Richiedi tour personalizzato'
      },
      de: {
        label: 'Unsere Touren',
        title: 'Alle Touren',
        sub: 'Touren durch Georgien — Berge, Klöster, Weinregionen und alte Städte.',
        ctaTitle: 'Nicht gefunden, was Sie brauchen?',
        ctaText: 'Wir können eine individuelle Reise für Sie planen.',
        ctaBtn: 'Individuelle Tour anfragen'
      },
      zh: {
        label: '我们的旅游',
        title: '全部行程',
        sub: '格鲁吉亚旅游 — 山脉、修道院、葡萄酒产区和古城。',
        ctaTitle: '没找到您需要的行程？',
        ctaText: '我们可以为您定制专属旅程。',
        ctaBtn: '申请定制旅游'
      },
      tr: {
        label: 'Turlarımız',
        title: 'Tüm Turlar',
        sub: 'Gürcistan\'da turlar — dağlar, manastırlar, şarap bölgeleri ve tarihi şehirler.',
        ctaTitle: 'İhtiyacınız olanı bulamadınız mı?',
        ctaText: 'Sizin için özel bir gezi planlayabiliriz.',
        ctaBtn: 'Özel tur talep et'
      },
    };
    return map[this.language];
  }
}
