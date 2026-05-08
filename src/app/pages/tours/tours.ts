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
        label: 'Our Experiences',
        title: 'All Tours',
        sub: 'Curated journeys across Georgia, from hidden mountain valleys to ancient wine cellars.',
        ctaTitle: "Can't Find Your Perfect Trip?",
        ctaText: "Tell us your vision and we'll craft a bespoke itinerary just for you.",
        ctaBtn: 'Request Custom Tour'
      },
      geo: {
        label: 'ჩვენი გამოცდილებები',
        title: 'ყველა ტური',
        sub: 'შერჩეული მოგზაურობები საქართველოში — მთებიდან ღვინის მარანებამდე.',
        ctaTitle: 'ვერ პოულობთ იდეალურ ტურს?',
        ctaText: 'მოგვწერეთ და ჩვენ დაგიგეგმავთ ინდივიდუალურ მოგზაურობას.',
        ctaBtn: 'ინდივიდუალური ტურის მოთხოვნა'
      },
      ru: {
        label: 'Наши туры',
        title: 'Все туры',
        sub: 'Уникальные путешествия по Грузии — от гор до винных погребов.',
        ctaTitle: 'Не нашли идеальный тур?',
        ctaText: 'Расскажите нам — мы создадим маршрут для вас.',
        ctaBtn: 'Индивидуальный тур'
      },
      ar: {
        label: 'تجاربنا',
        title: 'جميع الجولات',
        sub: 'رحلات مختارة عبر جورجيا، من الوديان الجبلية إلى مواقع التراث.',
        ctaTitle: 'لم تجد رحلتك المثالية؟',
        ctaText: 'أخبرنا برؤيتك وسنصمم لك خطة سفر خاصة.',
        ctaBtn: 'طلب جولة مخصصة'
      },
      es: {
        label: 'Nuestras experiencias',
        title: 'Todos los tours',
        sub: 'Viajes seleccionados por Georgia, desde valles de montaña hasta bodegas ancestrales.',
        ctaTitle: '¿No encuentras tu viaje perfecto?',
        ctaText: 'Cuéntanos tu visión y crearemos un itinerario a medida.',
        ctaBtn: 'Solicitar tour personalizado'
      },
      fr: {
        label: 'Nos expériences',
        title: 'Tous les tours',
        sub: 'Des voyages soigneusement sélectionnés à travers la Géorgie.',
        ctaTitle: 'Pas trouvé votre voyage idéal ?',
        ctaText: 'Dites-nous votre vision, nous créerons un itinéraire sur mesure.',
        ctaBtn: 'Demander un tour personnalisé'
      },
      it: {
        label: 'Le nostre esperienze',
        title: 'Tutti i tour',
        sub: 'Viaggi selezionati in Georgia, dalle valli di montagna alle cantine antiche.',
        ctaTitle: 'Non trovi il viaggio perfetto?',
        ctaText: 'Dicci la tua visione e creeremo un itinerario su misura.',
        ctaBtn: 'Richiedi tour personalizzato'
      },
      de: {
        label: 'Unsere Erlebnisse',
        title: 'Alle Touren',
        sub: 'Ausgewählte Reisen durch Georgien, von Bergtälern bis zu antiken Weinkellern.',
        ctaTitle: 'Nicht die perfekte Reise gefunden?',
        ctaText: 'Sagen Sie uns Ihre Vision und wir erstellen Ihre Reiseroute.',
        ctaBtn: 'Individuelle Tour anfragen'
      },
      zh: {
        label: '我们的体验',
        title: '所有旅游',
        sub: '精心策划的格鲁吉亚之旅，从山谷到古老的酒窖。',
        ctaTitle: '没找到完美的旅行？',
        ctaText: '告诉我们您的想法，我们将为您量身定制行程。',
        ctaBtn: '定制旅游申请'
      },
      tr: {
        label: 'Deneyimlerimiz',
        title: 'Tüm Turlar',
        sub: 'Gürcistan\'ın dağ vadilerinden antik şarap mahzenlerine kadar seçilmiş yolculuklar.',
        ctaTitle: 'Mükemmel turunuzu bulamadınız mı?',
        ctaText: 'Bize vizyonunuzu anlatın, size özel bir güzergah oluşturalım.',
        ctaBtn: 'Özel tur talebi'
      },
    };
    return map[this.language];
  }
}
