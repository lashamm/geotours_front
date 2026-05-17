import { Component, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService, Tour } from '../../services/tour';
import { LanguageService, LangCode } from '../../services/language.service';
import { CarSliderComponent } from '../../shared/car-slider/car-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarSliderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  language: LangCode = 'en';

  featuredTours: Tour[] = [];
  currentSlide = 0;
  heroSlide = 0;
  readonly heroCount = 3;
  private slideInterval: any;
  private heroInterval: any;
  private touchStartX = 0;

  constructor(private tourService: TourService, private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  ngOnInit() {
    this.featuredTours = this.tourService.getFeaturedTours(3);
    this.startSlider();
    this.startHeroSlider();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
    clearInterval(this.heroInterval);
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredTours.length;
    }, 5000);
  }

  startHeroSlider() {
    this.heroInterval = setInterval(() => {
      this.heroSlide = (this.heroSlide + 1) % this.heroCount;
    }, 6000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startSlider();
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEndHero(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      this.heroSlide = delta < 0
        ? (this.heroSlide + 1) % this.heroCount
        : (this.heroSlide - 1 + this.heroCount) % this.heroCount;
      clearInterval(this.heroInterval);
      this.startHeroSlider();
    }
  }

  onTouchEndFeatured(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      const len = this.featuredTours.length;
      this.currentSlide = delta < 0
        ? (this.currentSlide + 1) % len
        : (this.currentSlide - 1 + len) % len;
      clearInterval(this.slideInterval);
      this.startSlider();
    }
  }

  get T() {
    const map: Record<LangCode, {
      welcome: string; heroTitle: string; heroTitle2: string; heroSub: string;
      explore: string; story: string; scroll: string;
      fleet: string; fleetTitle: string;
      curated: string; featured: string; details: string; allTours: string;
      why: string; difference: string;
      w1Title: string; w1Text: string;
      w2Title: string; w2Text: string;
      w3Title: string; w3Text: string;
      contact: string; begin: string; contactText: string; phone: string;
    }> = {
      en: {
        welcome: 'Welcome to Georgia',
        heroTitle: 'Explore',
        heroTitle2: 'Georgia',
        heroSub: 'VIP tours through the Caucasus — mountains, monasteries and ancient cities.',
        explore: 'See Tours',
        story: 'About Us',
        scroll: 'Scroll',
        fleet: 'Our Cars',
        fleetTitle: 'Travel in Comfort',
        curated: 'Our Tours',
        featured: 'Popular Tours',
        details: 'View Details',
        allTours: 'All Tours',
        why: 'Why Vardotour',
        difference: 'Why Choose Us',
        w1Title: 'Airport Transfers',
        w1Text: 'VIP pickup and drop-off at any airport in Georgia.',
        w2Title: 'Tours in Georgia',
        w2Text: 'Day trips and multi-day tours across all regions.',
        w3Title: 'International Transfers',
        w3Text: 'Rides to Armenia, Azerbaijan and Turkey.',
        contact: 'Contact Us',
        begin: 'Start Your Journey',
        contactText: 'Tell us what you want and we will plan everything.',
        phone: 'Phone',
      },
      geo: {
        welcome: 'კეთილი იყოს თქვენი მობრძანება საქართველოში',
        heroTitle: 'აღმოაჩინეთ',
        heroTitle2: 'საქართველო',
        heroSub: 'VIP ტურები კავკასიაში — მთები, მონასტრები და ძველი ქალაქები.',
        explore: 'ტურები',
        story: 'ჩვენ შესახებ',
        scroll: 'ქვემოთ',
        fleet: 'ჩვენი მანქანები',
        fleetTitle: 'კომფორტული მგზავრობა',
        curated: 'ჩვენი ტურები',
        featured: 'პოპულარული ტურები',
        details: 'დეტალები',
        allTours: 'ყველა ტური',
        why: 'რატომ ჩვენ',
        difference: 'ჩვენი უპირატესობა',
        w1Title: 'ტრანსფერი აეროპორტიდან',
        w1Text: 'VIP ტრანსფერი საქართველოს ნებისმიერ აეროპორტამდე.',
        w2Title: 'ტურები საქართველოში',
        w2Text: 'ერთ- და მრავალდღიანი ტურები ყველა რეგიონში.',
        w3Title: 'საერთაშორისო ტრანსფერი',
        w3Text: 'სომხეთში, აზერბაიჯანსა და თურქეთში.',
        contact: 'დაგვიკავშირდით',
        begin: 'დაიწყეთ მოგზაურობა',
        contactText: 'მოგვწერეთ და ჩვენ ყველაფერს მოვაწყობთ.',
        phone: 'ტელეფონი',
      },
      ru: {
        welcome: 'Добро пожаловать в Грузию',
        heroTitle: 'Откройте',
        heroTitle2: 'Грузию',
        heroSub: 'VIP-туры по Кавказу — горы, монастыри и древние города.',
        explore: 'Смотреть туры',
        story: 'О нас',
        scroll: 'Вниз',
        fleet: 'Наши машины',
        fleetTitle: 'Путешествуйте с комфортом',
        curated: 'Наши туры',
        featured: 'Популярные туры',
        details: 'Подробнее',
        allTours: 'Все туры',
        why: 'Почему мы',
        difference: 'Наше преимущество',
        w1Title: 'Трансфер из аэропорта',
        w1Text: 'VIP-трансфер из любого аэропорта Грузии.',
        w2Title: 'Туры по Грузии',
        w2Text: 'Однодневные и многодневные туры по всем регионам.',
        w3Title: 'Международные трансферы',
        w3Text: 'В Армению, Азербайджан и Турцию.',
        contact: 'Свяжитесь с нами',
        begin: 'Начните путешествие',
        contactText: 'Напишите нам, и мы всё организуем.',
        phone: 'Телефон',
      },
      ar: {
        welcome: 'أهلاً بك في جورجيا',
        heroTitle: 'اكتشف',
        heroTitle2: 'جورجيا',
        heroSub: 'رحلات VIP في القوقاز — الجبال والأديرة والمدن القديمة.',
        explore: 'الجولات',
        story: 'من نحن',
        scroll: 'للأسفل',
        fleet: 'سياراتنا',
        fleetTitle: 'سافر براحة',
        curated: 'جولاتنا',
        featured: 'جولات مميزة',
        details: 'التفاصيل',
        allTours: 'جميع الجولات',
        why: 'لماذا نحن',
        difference: 'ما يميزنا',
        w1Title: 'توصيل المطار',
        w1Text: 'توصيل VIP من وإلى أي مطار في جورجيا.',
        w2Title: 'جولات في جورجيا',
        w2Text: 'جولات يومية ومتعددة الأيام في جميع المناطق.',
        w3Title: 'توصيل دولي',
        w3Text: 'إلى أرمينيا وأذربيجان وتركيا.',
        contact: 'تواصل معنا',
        begin: 'ابدأ رحلتك',
        contactText: 'أخبرنا بما تريد ونحن نرتب كل شيء.',
        phone: 'الهاتف',
      },
      es: {
        welcome: 'Bienvenido a Georgia',
        heroTitle: 'Descubre',
        heroTitle2: 'Georgia',
        heroSub: 'Tours VIP por el Cáucaso — montañas, monasterios y ciudades antiguas.',
        explore: 'Ver tours',
        story: 'Quiénes somos',
        scroll: 'Bajar',
        fleet: 'Nuestros autos',
        fleetTitle: 'Viaja con comodidad',
        curated: 'Nuestros tours',
        featured: 'Tours populares',
        details: 'Detalles',
        allTours: 'Todos los tours',
        why: 'Por qué nosotros',
        difference: 'Lo que nos diferencia',
        w1Title: 'Traslado al aeropuerto',
        w1Text: 'Traslado VIP desde y hacia cualquier aeropuerto en Georgia.',
        w2Title: 'Tours en Georgia',
        w2Text: 'Tours de un día y de varios días en todas las regiones.',
        w3Title: 'Traslados internacionales',
        w3Text: 'A Armenia, Azerbaiyán y Turquía.',
        contact: 'Contáctanos',
        begin: 'Empieza tu viaje',
        contactText: 'Dinos lo que quieres y nosotros lo organizamos todo.',
        phone: 'Teléfono',
      },
      fr: {
        welcome: 'Bienvenue en Géorgie',
        heroTitle: 'Découvrez',
        heroTitle2: 'la Géorgie',
        heroSub: 'Tours VIP dans le Caucase — montagnes, monastères et villes anciennes.',
        explore: 'Voir les tours',
        story: 'Qui sommes-nous',
        scroll: 'Défiler',
        fleet: 'Nos voitures',
        fleetTitle: 'Voyagez confortablement',
        curated: 'Nos tours',
        featured: 'Tours populaires',
        details: 'Détails',
        allTours: 'Tous les tours',
        why: 'Pourquoi nous',
        difference: 'Notre avantage',
        w1Title: 'Transfert aéroport',
        w1Text: 'Transfert VIP depuis et vers tout aéroport en Géorgie.',
        w2Title: 'Tours en Géorgie',
        w2Text: 'Tours d\'un jour et de plusieurs jours dans toutes les régions.',
        w3Title: 'Transferts internationaux',
        w3Text: 'Vers l\'Arménie, l\'Azerbaïdjan et la Turquie.',
        contact: 'Contactez-nous',
        begin: 'Commencez votre voyage',
        contactText: 'Dites-nous ce que vous voulez et nous organisons tout.',
        phone: 'Téléphone',
      },
      it: {
        welcome: 'Benvenuto in Georgia',
        heroTitle: 'Scopri',
        heroTitle2: 'la Georgia',
        heroSub: 'Tour VIP nel Caucaso — montagne, monasteri e città antiche.',
        explore: 'Vedi tour',
        story: 'Chi siamo',
        scroll: 'Scorri',
        fleet: 'Le nostre auto',
        fleetTitle: 'Viaggia con comfort',
        curated: 'I nostri tour',
        featured: 'Tour popolari',
        details: 'Dettagli',
        allTours: 'Tutti i tour',
        why: 'Perché noi',
        difference: 'Il nostro vantaggio',
        w1Title: 'Trasferimento aeroporto',
        w1Text: 'Trasferimento VIP da e per qualsiasi aeroporto in Georgia.',
        w2Title: 'Tour in Georgia',
        w2Text: 'Tour di un giorno e di più giorni in tutte le regioni.',
        w3Title: 'Trasferimenti internazionali',
        w3Text: 'Verso Armenia, Azerbaigian e Turchia.',
        contact: 'Contattaci',
        begin: 'Inizia il tuo viaggio',
        contactText: 'Dicci cosa vuoi e organizziamo tutto noi.',
        phone: 'Telefono',
      },
      de: {
        welcome: 'Willkommen in Georgien',
        heroTitle: 'Entdecken Sie',
        heroTitle2: 'Georgien',
        heroSub: 'VIP-Touren durch den Kaukasus — Berge, Klöster und alte Städte.',
        explore: 'Touren ansehen',
        story: 'Über uns',
        scroll: 'Scrollen',
        fleet: 'Unsere Autos',
        fleetTitle: 'Komfortabel reisen',
        curated: 'Unsere Touren',
        featured: 'Beliebte Touren',
        details: 'Details',
        allTours: 'Alle Touren',
        why: 'Warum wir',
        difference: 'Unser Vorteil',
        w1Title: 'Flughafentransfer',
        w1Text: 'VIP-Transfer von und zu jedem Flughafen in Georgien.',
        w2Title: 'Touren in Georgien',
        w2Text: 'Ein- und mehrtägige Touren in allen Regionen.',
        w3Title: 'Internationale Transfers',
        w3Text: 'Nach Armenien, Aserbaidschan und der Türkei.',
        contact: 'Kontakt',
        begin: 'Starten Sie Ihre Reise',
        contactText: 'Sagen Sie uns, was Sie wollen, und wir organisieren alles.',
        phone: 'Telefon',
      },
      zh: {
        welcome: '欢迎来到格鲁吉亚',
        heroTitle: '探索',
        heroTitle2: '格鲁吉亚',
        heroSub: 'VIP 高加索之旅 — 山脉、修道院和古城。',
        explore: '查看行程',
        story: '关于我们',
        scroll: '向下',
        fleet: '我们的车辆',
        fleetTitle: '舒适出行',
        curated: '我们的行程',
        featured: '热门行程',
        details: '详情',
        allTours: '全部行程',
        why: '为什么选我们',
        difference: '我们的优势',
        w1Title: '机场接送',
        w1Text: '格鲁吉亚任何机场的VIP接送服务。',
        w2Title: '格鲁吉亚游',
        w2Text: '一日游和多日游，覆盖所有地区。',
        w3Title: '国际接送',
        w3Text: '前往亚美尼亚、阿塞拜疆和土耳其。',
        contact: '联系我们',
        begin: '开始您的旅程',
        contactText: '告诉我们您想要什么，我们来安排一切。',
        phone: '电话',
      },
      tr: {
        welcome: 'Gürcistan\'a Hoş Geldiniz',
        heroTitle: 'Gürcistan\'ı',
        heroTitle2: 'keşfedin',
        heroSub: 'Kafkasya\'da VIP turlar — dağlar, manastırlar ve tarihi şehirler.',
        explore: 'Turları gör',
        story: 'Hakkımızda',
        scroll: 'Aşağı',
        fleet: 'Araçlarımız',
        fleetTitle: 'Konforla seyahat edin',
        curated: 'Turlarımız',
        featured: 'Popüler turlar',
        details: 'Detaylar',
        allTours: 'Tüm turlar',
        why: 'Neden biz',
        difference: 'Farkımız',
        w1Title: 'Havalimanı transferi',
        w1Text: 'Gürcistan\'daki her havalimanına VIP transfer.',
        w2Title: 'Gürcistan turları',
        w2Text: 'Tüm bölgelerde günlük ve çok günlük turlar.',
        w3Title: 'Uluslararası transfer',
        w3Text: 'Ermenistan, Azerbaycan ve Türkiye\'ye.',
        contact: 'Bize ulaşın',
        begin: 'Yolculuğunuzu başlatın',
        contactText: 'Ne istediğinizi söyleyin, biz her şeyi ayarlayalım.',
        phone: 'Telefon',
      },
    };
    return map[this.language];
  }
}
