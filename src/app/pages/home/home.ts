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
        heroTitle: 'Where Ancient',
        heroTitle2: 'Meets Timeless',
        heroSub: 'Handcrafted luxury journeys through the Caucasus — from glacial peaks to sacred monasteries and centuries-old wine cellars.',
        explore: 'Explore Tours',
        story: 'Our Story',
        scroll: 'Scroll',
        fleet: 'Our Fleet',
        fleetTitle: 'Comfort at Every Altitude',
        curated: 'Curated Experiences',
        featured: 'Featured Tours',
        details: 'View Details',
        allTours: 'View All Tours',
        why: 'Why Vardotour',
        difference: 'The Vardotour Difference',
        w1Title: 'Airport Transfers',
        w1Text: 'VIP transfers to and from any airport in Georgia.',
        w2Title: 'Tours in Georgia',
        w2Text: 'Day trips and multi-day tours across every region.',
        w3Title: 'International Transfers',
        w3Text: 'Comfortable rides to Armenia, Azerbaijan & Turkey.',
        contact: 'Get in Touch',
        begin: 'Begin Your Journey',
        contactText: 'Tell us your dream — we will craft the experience around it.',
        phone: 'Phone',
      },
      geo: {
        welcome: 'კეთილი იყოს თქვენი მობრძანება საქართველოში',
        heroTitle: 'მწვერვალებიდან',
        heroTitle2: 'ზღვამდე',
        heroSub: 'შეიქმენი დაუვიწყარი მოგონებები',
        explore: 'ტურების ნახვა',
        story: 'ჩვენ შესახებ',
        scroll: 'ჩასქროლეთ',
        fleet: 'ჩვენი ფლოტი',
        fleetTitle: 'კომფორტი ყოველ სიმაღლეზე',
        curated: 'რჩეული გამოცდილებები',
        featured: 'რჩეული ტურები',
        details: 'დეტალები',
        allTours: 'ყველა ტური',
        why: 'რატომ ჩვენ',
        difference: 'ჩვენი უპირატესობა',
        w1Title: 'ტრასფერები აეროპორტიდან',
        w1Text: 'კომფორტული ტრასფერი საქართველოს ნებისმიერ წერტილში.',
        w2Title: 'ტურები საქართველოში',
        w2Text: 'ერთდღიანი და მრავალდღიანი ტურები საქართველოს ყველა რეგიონში.',
        w3Title: 'საერთაშორისო ტრანსფერი',
        w3Text: 'ტრანსფერი სომხეთში, აზერბაიჯანსა და თურქეთში — კომფორტული და უსაფრთხო.',
        contact: 'დაგვიკავშირდით',
        begin: 'დაიწყეთ მოგზაურობა',
        contactText: 'მოგვწერეთ თქვენი იდეა.',
        phone: 'ტელეფონი',
      },
      ru: {
        welcome: 'Добро пожаловать в Грузию',
        heroTitle: 'Где древность',
        heroTitle2: 'встречает вечность',
        heroSub: 'Роскошные путешествия по Кавказу — от гор до монастырей.',
        explore: 'Смотреть туры',
        story: 'Наша история',
        scroll: 'Прокрутите',
        fleet: 'Наш автопарк',
        fleetTitle: 'Комфорт на любой высоте',
        curated: 'Подобранные впечатления',
        featured: 'Популярные туры',
        details: 'Подробнее',
        allTours: 'Все туры',
        why: 'Почему мы',
        difference: 'Наше преимущество',
        w1Title: 'Трансферы из аэропорта',
        w1Text: 'VIP-трансфер в любую точку Грузии.',
        w2Title: 'Туры по Грузии',
        w2Text: 'Однодневные и многодневные туры.',
        w3Title: 'Международные трансферы',
        w3Text: 'Армения, Азербайджан и Турция — комфортно и безопасно.',
        contact: 'Свяжитесь с нами',
        begin: 'Начните путешествие',
        contactText: 'Расскажите о своей мечте.',
        phone: 'Телефон',
      },
      ar: {
        welcome: 'أهلاً بك في جورجيا',
        heroTitle: 'حيث التاريخ',
        heroTitle2: 'يلتقي الحاضر',
        heroSub: 'رحلات VIP في القوقاز.',
        explore: 'الجولات',
        story: 'قصتنا',
        scroll: 'للأسفل',
        fleet: 'أسطولنا',
        fleetTitle: 'راحة في كل مكان',
        curated: 'تجارب مختارة',
        featured: 'جولات مميزة',
        details: 'التفاصيل',
        allTours: 'جميع الجولات',
        why: 'لماذا نحن',
        difference: 'مزايانا',
        w1Title: 'نقل المطار',
        w1Text: 'نقل VIP من وإلى المطار.',
        w2Title: 'جولات جورجيا',
        w2Text: 'جولات يومية ومتعددة الأيام.',
        w3Title: 'نقل دولي',
        w3Text: 'إلى أرمينيا وأذربيجان وتركيا.',
        contact: 'تواصل معنا',
        begin: 'ابدأ رحلتك',
        contactText: 'أخبرنا بحلمك.',
        phone: 'الهاتف',
      },
      es: {
        welcome: 'Bienvenido a Georgia',
        heroTitle: 'Donde lo antiguo',
        heroTitle2: 'encuentra lo eterno',
        heroSub: 'Viajes VIP por el Cáucaso.',
        explore: 'Ver tours',
        story: 'Nuestra historia',
        scroll: 'Desliza',
        fleet: 'Nuestra flota',
        fleetTitle: 'Comodidad a toda altitud',
        curated: 'Experiencias curadas',
        featured: 'Tours destacados',
        details: 'Detalles',
        allTours: 'Todos los tours',
        why: 'Por qué nosotros',
        difference: 'Lo que nos diferencia',
        w1Title: 'Traslados aeropuerto',
        w1Text: 'VIP desde y hacia el aeropuerto.',
        w2Title: 'Tours por Georgia',
        w2Text: 'Excursiones de uno o varios días.',
        w3Title: 'Traslados internacionales',
        w3Text: 'A Armenia, Azerbaiyán y Turquía.',
        contact: 'Contáctanos',
        begin: 'Inicia tu viaje',
        contactText: 'Cuéntanos tu sueño.',
        phone: 'Teléfono',
      },
      fr: {
        welcome: 'Bienvenue en Géorgie',
        heroTitle: "Là où l'ancien",
        heroTitle2: "rencontre l'éternel",
        heroSub: 'Voyages VIP dans le Caucase.',
        explore: 'Voir les tours',
        story: 'Notre histoire',
        scroll: 'Défiler',
        fleet: 'Notre flotte',
        fleetTitle: 'Confort à toute altitude',
        curated: 'Expériences sélectionnées',
        featured: 'Tours vedettes',
        details: 'Détails',
        allTours: 'Tous les tours',
        why: 'Pourquoi nous',
        difference: 'Notre différence',
        w1Title: 'Transferts aéroport',
        w1Text: "VIP depuis et vers l'aéroport.",
        w2Title: 'Tours en Géorgie',
        w2Text: 'Excursions à la journée ou sur plusieurs jours.',
        w3Title: 'Transferts internationaux',
        w3Text: "Vers l'Arménie, l'Azerbaïdjan et la Turquie.",
        contact: 'Contactez-nous',
        begin: 'Commencez votre voyage',
        contactText: 'Parlez-nous de votre rêve.',
        phone: 'Téléphone',
      },
      it: {
        welcome: 'Benvenuto in Georgia',
        heroTitle: "Dove l'antico",
        heroTitle2: "incontra l'eterno",
        heroSub: 'Viaggi VIP nel Caucaso.',
        explore: 'Esplora tour',
        story: 'La nostra storia',
        scroll: 'Scorri',
        fleet: 'La nostra flotta',
        fleetTitle: 'Comfort a ogni altitudine',
        curated: 'Esperienze curate',
        featured: 'Tour in evidenza',
        details: 'Dettagli',
        allTours: 'Tutti i tour',
        why: 'Perché noi',
        difference: 'La differenza Vardotour',
        w1Title: 'Trasferimenti aeroporto',
        w1Text: "VIP da e per l'aeroporto.",
        w2Title: 'Tour in Georgia',
        w2Text: 'Escursioni giornaliere e multi-giorno.',
        w3Title: 'Trasferimenti internazionali',
        w3Text: 'Verso Armenia, Azerbaigian e Turchia.',
        contact: 'Contattaci',
        begin: 'Inizia il tuo viaggio',
        contactText: 'Raccontaci il tuo sogno.',
        phone: 'Telefono',
      },
      de: {
        welcome: 'Willkommen in Georgien',
        heroTitle: 'Wo das Alte',
        heroTitle2: 'das Ewige trifft',
        heroSub: 'VIP-Reisen durch den Kaukasus.',
        explore: 'Touren ansehen',
        story: 'Unsere Geschichte',
        scroll: 'Scrollen',
        fleet: 'Unsere Flotte',
        fleetTitle: 'Komfort auf jeder Höhe',
        curated: 'Kuratierte Erlebnisse',
        featured: 'Ausgewählte Touren',
        details: 'Details',
        allTours: 'Alle Touren',
        why: 'Warum wir',
        difference: 'Der Vardotour-Unterschied',
        w1Title: 'Flughafentransfer',
        w1Text: 'VIP-Transfer zum und vom Flughafen.',
        w2Title: 'Touren in Georgien',
        w2Text: 'Ein- und mehrtägige Ausflüge.',
        w3Title: 'Internationale Transfers',
        w3Text: 'Nach Armenien, Aserbaidschan und Türkei.',
        contact: 'Kontakt',
        begin: 'Starten Sie Ihre Reise',
        contactText: 'Erzählen Sie uns von Ihrem Traum.',
        phone: 'Telefon',
      },
      zh: {
        welcome: '欢迎来到格鲁吉亚',
        heroTitle: '古老与',
        heroTitle2: '永恒的邂逅',
        heroSub: '高加索VIP之旅。',
        explore: '探索旅程',
        story: '我们的故事',
        scroll: '向下',
        fleet: '我们的车队',
        fleetTitle: '舒适无处不在',
        curated: '精选体验',
        featured: '热门旅程',
        details: '详情',
        allTours: '全部旅程',
        why: '为什么选我们',
        difference: '我们的优势',
        w1Title: '机场接送',
        w1Text: 'VIP机场接送服务。',
        w2Title: '格鲁吉亚游',
        w2Text: '一日及多日游。',
        w3Title: '国际接送',
        w3Text: '前往亚美尼亚、阿塞拜疆和土耳其。',
        contact: '联系我们',
        begin: '开始您的旅程',
        contactText: '告诉我们您的梦想。',
        phone: '电话',
      },
      tr: {
        welcome: "Gürcistan'a Hoş Geldiniz",
        heroTitle: 'Eskinin',
        heroTitle2: 'sonsuzla buluşması',
        heroSub: "Kafkasya'da VIP seyahat.",
        explore: 'Turları gör',
        story: 'Hikayemiz',
        scroll: 'Kaydır',
        fleet: 'Filomuz',
        fleetTitle: 'Her yükseklikte konfor',
        curated: 'Özenle seçilmiş',
        featured: 'Öne çıkan turlar',
        details: 'Detaylar',
        allTours: 'Tüm turlar',
        why: 'Neden biz',
        difference: 'Farkımız',
        w1Title: 'Havalimanı transferi',
        w1Text: 'VIP havalimanı transferi.',
        w2Title: 'Gürcistan turları',
        w2Text: 'Günlük ve çok günlük turlar.',
        w3Title: 'Uluslararası transfer',
        w3Text: "Ermenistan, Azerbaycan ve Türkiye'ye.",
        contact: 'İletişim',
        begin: 'Yolculuğunuza başlayın',
        contactText: 'Hayalinizi anlatın.',
        phone: 'Telefon',
      },
    };
    return map[this.language];
  }
}
