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
  private slideInterval: any;

  constructor(private tourService: TourService, private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  ngOnInit() {
    this.featuredTours = this.tourService.getFeaturedTours(3);
    this.startSlider();
  }

  ngOnDestroy() { clearInterval(this.slideInterval); }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredTours.length;
    }, 5000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startSlider();
  }

  get T() {
    const map: Record<LangCode, {
      welcome: string;
      heroTitle: string; heroTitle2: string; heroSub: string;
      explore: string; story: string; scroll: string;
      fleet: string; fleetTitle: string;
      curated: string; featured: string; from: string; details: string; allTours: string;
      why: string; difference: string;
      s1Title: string; s1Text: string;
      s2Title: string; s2Text: string;
      s3Title: string; s3Text: string;
      contact: string; begin: string; contactText: string; phone: string;
    }> = {
      en: {
        welcome: 'Welcome to Georgia',
        heroTitle: 'Where Ancient', heroTitle2: 'Meets Timeless',
        heroSub: 'Handcrafted luxury journeys through the Caucasus — from glacial peaks to sacred monasteries and centuries-old wine cellars.',
        explore: 'Explore Tours', story: 'Our Story', scroll: 'Scroll',
        fleet: 'Our Fleet', fleetTitle: 'Comfort at Every Altitude',
        curated: 'Curated Experiences', featured: 'Featured Tours',
        from: 'From', details: 'View Details', allTours: 'View All Tours',
        why: 'Why Vardotour', difference: 'The Vardotour Difference',
        s1Title: 'Airport Transfers', s1Text: 'Comfortable VIP transfer to any point in Georgia.',
        s2Title: 'Tours in Georgia', s2Text: 'One-day and multi-day tours across all regions of Georgia.',
        s3Title: 'International Transfers', s3Text: 'Transfers to Armenia, Azerbaijan and Turkey — comfortable and safe.',
        contact: 'Get in Touch', begin: 'Begin Your Journey',
        contactText: 'Tell us your dream — we will craft the experience around it.', phone: 'Phone',
      },
      geo: {
        welcome: 'კეთილი იყოს თქვენი მობრძანება საქართველოში',
        heroTitle: 'სადაც ძველი', heroTitle2: 'შეხვდება მარადიულს',
        heroSub: 'დახვეწილი მოგზაურობები კავკასიაში — მყინვარული მწვერვალებიდან წმინდა მონასტრებამდე.',
        explore: 'ტურების ნახვა', story: 'ჩვენ შესახებ', scroll: 'ჩასქროლეთ',
        fleet: 'ჩვენი ფლოტი', fleetTitle: 'კომფორტი ყოველ სიმაღლეზე',
        curated: 'რჩეული გამოცდილებები', featured: 'რჩეული ტურები',
        from: 'დან', details: 'დეტალები', allTours: 'ყველა ტური',
        why: 'რატომ ჩვენ', difference: 'Vardotour-ის უპირატესობა',
        s1Title: 'ტრანსფერები აეროპორტიდან', s1Text: 'კომფორტული ტრანსფერი საქართველოს ნებისმიერ წერტილში.',
        s2Title: 'ტურები საქართველოში', s2Text: 'ერთდღიანი და მრავალდღიანი ტურები საქართველოს ყველა რეგიონში.',
        s3Title: 'საერთაშორისო ტრანსფერი', s3Text: 'ტრანსფერი სომხეთში, აზერბაიჯანსა და თურქეთში — კომფორტული და უსაფრთხო.',
        contact: 'დაგვიკავშირდით', begin: 'დაიწყეთ მოგზაურობა',
        contactText: 'მოგვწერეთ და ჩვენ შევქმნით სრულყოფილ მოგზაურობას თქვენთვის.', phone: 'ტელეფონი',
      },
      ru: {
        welcome: 'Добро пожаловать в Грузию',
        heroTitle: 'Где древность', heroTitle2: 'встречает вечность',
        heroSub: 'Роскошные путешествия по Кавказу — от гор до монастырей.',
        explore: 'Смотреть туры', story: 'Наша история', scroll: 'Прокрутите',
        fleet: 'Наш автопарк', fleetTitle: 'Комфорт на любой высоте',
        curated: 'Подобранные впечатления', featured: 'Популярные туры',
        from: 'от', details: 'Подробнее', allTours: 'Все туры',
        why: 'Почему мы', difference: 'Преимущество Vardotour',
        s1Title: 'Трансферы из аэропорта', s1Text: 'Комфортный VIP-трансфер в любую точку Грузии.',
        s2Title: 'Туры по Грузии', s2Text: 'Однодневные и многодневные туры по всем регионам Грузии.',
        s3Title: 'Международные трансферы', s3Text: 'Трансферы в Армению, Азербайджан и Турцию — комфортно и безопасно.',
        contact: 'Свяжитесь с нами', begin: 'Начните путешествие',
        contactText: 'Расскажите о мечте — мы создадим маршрут вашей жизни.', phone: 'Телефон',
      },
      ar: {
        welcome: 'مرحباً بكم في جورجيا',
        heroTitle: 'حيث القديم', heroTitle2: 'يلتقي بالخالد',
        heroSub: 'رحلات فاخرة مصممة بعناية عبر القوقاز — من القمم الجليدية إلى الأديرة المقدسة.',
        explore: 'استكشف الجولات', story: 'قصتنا', scroll: 'تمرير',
        fleet: 'أسطولنا', fleetTitle: 'راحة على كل ارتفاع',
        curated: 'تجارب مختارة', featured: 'الجولات المميزة',
        from: 'من', details: 'التفاصيل', allTours: 'جميع الجولات',
        why: 'لماذا فاردوتور', difference: 'ما يميز فاردوتور',
        s1Title: 'نقل من المطار', s1Text: 'نقل VIP مريح إلى أي نقطة في جورجيا.',
        s2Title: 'جولات في جورجيا', s2Text: 'جولات ليوم واحد ومتعددة الأيام في جميع مناطق جورجيا.',
        s3Title: 'النقل الدولي', s3Text: 'نقل إلى أرمينيا وأذربيجان وتركيا — مريح وآمن.',
        contact: 'تواصل معنا', begin: 'ابدأ رحلتك',
        contactText: 'أخبرنا عن حلمك وسنصمم لك التجربة المثالية.', phone: 'الهاتف',
      },
      es: {
        welcome: 'Bienvenido a Georgia',
        heroTitle: 'Donde lo antiguo', heroTitle2: 'encuentra lo eterno',
        heroSub: 'Viajes de lujo artesanales por el Cáucaso — desde cumbres glaciares hasta monasterios sagrados.',
        explore: 'Explorar tours', story: 'Nuestra historia', scroll: 'Desplazar',
        fleet: 'Nuestra flota', fleetTitle: 'Comodidad a cualquier altitud',
        curated: 'Experiencias seleccionadas', featured: 'Tours destacados',
        from: 'Desde', details: 'Ver detalles', allTours: 'Ver todos los tours',
        why: 'Por qué Vardotour', difference: 'La diferencia Vardotour',
        s1Title: 'Traslados desde el aeropuerto', s1Text: 'Traslado VIP cómodo a cualquier punto de Georgia.',
        s2Title: 'Tours por Georgia', s2Text: 'Tours de un día y de varios días por todas las regiones de Georgia.',
        s3Title: 'Traslados internacionales', s3Text: 'Traslados a Armenia, Azerbaiyán y Turquía — cómodos y seguros.',
        contact: 'Contáctanos', begin: 'Comienza tu viaje',
        contactText: 'Cuéntanos tu sueño y diseñaremos la experiencia perfecta.', phone: 'Teléfono',
      },
      fr: {
        welcome: 'Bienvenue en Géorgie',
        heroTitle: 'Là où l\'ancien', heroTitle2: 'rencontre l\'éternel',
        heroSub: 'Voyages de luxe sur mesure à travers le Caucase — des sommets glaciaires aux monastères sacrés.',
        explore: 'Explorer les tours', story: 'Notre histoire', scroll: 'Défiler',
        fleet: 'Notre flotte', fleetTitle: 'Confort à toute altitude',
        curated: 'Expériences sélectionnées', featured: 'Tours en vedette',
        from: 'À partir de', details: 'Voir les détails', allTours: 'Voir tous les tours',
        why: 'Pourquoi Vardotour', difference: 'La différence Vardotour',
        s1Title: 'Transferts depuis l\'aéroport', s1Text: 'Transfert VIP confortable vers n\'importe quel point de Géorgie.',
        s2Title: 'Tours en Géorgie', s2Text: 'Tours d\'une journée et de plusieurs jours dans toutes les régions de Géorgie.',
        s3Title: 'Transferts internationaux', s3Text: 'Transferts vers l\'Arménie, l\'Azerbaïdjan et la Turquie — confortables et sûrs.',
        contact: 'Contactez-nous', begin: 'Commencez votre voyage',
        contactText: 'Parlez-nous de votre rêve — nous créerons l\'expérience parfaite.', phone: 'Téléphone',
      },
      it: {
        welcome: 'Benvenuti in Georgia',
        heroTitle: 'Dove l\'antico', heroTitle2: 'incontra l\'eterno',
        heroSub: 'Viaggi di lusso artigianali attraverso il Caucaso — dalle vette glaciali ai monasteri sacri.',
        explore: 'Esplora i tour', story: 'La nostra storia', scroll: 'Scorri',
        fleet: 'Il nostro parco auto', fleetTitle: 'Comfort ad ogni altitudine',
        curated: 'Esperienze selezionate', featured: 'Tour in evidenza',
        from: 'Da', details: 'Dettagli', allTours: 'Vedi tutti i tour',
        why: 'Perché Vardotour', difference: 'La differenza Vardotour',
        s1Title: 'Trasferimenti dall\'aeroporto', s1Text: 'Trasferimento VIP confortevole in qualsiasi punto della Georgia.',
        s2Title: 'Tour in Georgia', s2Text: 'Tour di un giorno e di più giorni in tutte le regioni della Georgia.',
        s3Title: 'Trasferimenti internazionali', s3Text: 'Trasferimenti in Armenia, Azerbaigian e Turchia — confortevoli e sicuri.',
        contact: 'Contattaci', begin: 'Inizia il tuo viaggio',
        contactText: 'Raccontaci il tuo sogno — creeremo l\'esperienza perfetta.', phone: 'Telefono',
      },
      de: {
        welcome: 'Willkommen in Georgien',
        heroTitle: 'Wo das Alte', heroTitle2: 'auf das Zeitlose trifft',
        heroSub: 'Handgefertigte Luxusreisen durch den Kaukasus — von Gletschergipfeln bis zu heiligen Klöstern.',
        explore: 'Touren erkunden', story: 'Unsere Geschichte', scroll: 'Scrollen',
        fleet: 'Unsere Flotte', fleetTitle: 'Komfort auf jeder Höhe',
        curated: 'Kuratierte Erlebnisse', featured: 'Ausgewählte Touren',
        from: 'Ab', details: 'Details ansehen', allTours: 'Alle Touren ansehen',
        why: 'Warum Vardotour', difference: 'Der Vardotour-Unterschied',
        s1Title: 'Flughafentransfers', s1Text: 'Komfortabler VIP-Transfer zu jedem Punkt in Georgien.',
        s2Title: 'Touren in Georgien', s2Text: 'Eintägige und mehrtägige Touren in allen Regionen Georgiens.',
        s3Title: 'Internationale Transfers', s3Text: 'Transfers nach Armenien, Aserbaidschan und in die Türkei — komfortabel und sicher.',
        contact: 'Kontakt aufnehmen', begin: 'Reise beginnen',
        contactText: 'Erzählen Sie uns Ihren Traum — wir gestalten das perfekte Erlebnis.', phone: 'Telefon',
      },
      zh: {
        welcome: '欢迎来到格鲁吉亚',
        heroTitle: '古老与', heroTitle2: '永恒的相遇',
        heroSub: '精心打造的高加索奢华之旅——从冰川峰顶到神圣修道院。',
        explore: '探索旅游', story: '我们的故事', scroll: '滚动',
        fleet: '我们的车队', fleetTitle: '每个海拔的舒适体验',
        curated: '精选体验', featured: '特色旅游',
        from: '起价', details: '查看详情', allTours: '查看所有旅游',
        why: '为什么选择Vardotour', difference: 'Vardotour的优势',
        s1Title: '机场接送', s1Text: '舒适的VIP接送服务，可前往格鲁吉亚任何地点。',
        s2Title: '格鲁吉亚旅游', s2Text: '格鲁吉亚各地区一日游和多日游。',
        s3Title: '国际接送', s3Text: '前往亚美尼亚、阿塞拜疆和土耳其的舒适安全接送。',
        contact: '联系我们', begin: '开始您的旅程',
        contactText: '告诉我们您的梦想——我们将为您打造完美体验。', phone: '电话',
      },
      tr: {
        welcome: 'Gürcistan\'a Hoş Geldiniz',
        heroTitle: 'Eskinin', heroTitle2: 'Zamansızla Buluşması',
        heroSub: 'Kafkasya\'da el yapımı lüks yolculuklar — buzul zirvelerinden kutsal manastırlara.',
        explore: 'Turları Keşfet', story: 'Hikayemiz', scroll: 'Kaydır',
        fleet: 'Filomuz', fleetTitle: 'Her Rakımda Konfor',
        curated: 'Seçilmiş Deneyimler', featured: 'Öne Çıkan Turlar',
        from: 'Başlangıç', details: 'Detayları Gör', allTours: 'Tüm Turları Gör',
        why: 'Neden Vardotour', difference: 'Vardotour Farkı',
        s1Title: 'Havalimanı Transferleri', s1Text: 'Gürcistan\'ın herhangi bir noktasına konforlu VIP transfer.',
        s2Title: 'Gürcistan Turları', s2Text: 'Gürcistan\'ın tüm bölgelerinde günlük ve çok günlük turlar.',
        s3Title: 'Uluslararası Transferler', s3Text: 'Ermenistan, Azerbaycan ve Türkiye\'ye konforlu ve güvenli transferler.',
        contact: 'Bize Ulaşın', begin: 'Yolculuğunuzu Başlatın',
        contactText: 'Hayalinizi anlatın — mükemmel deneyimi sizin için tasarlayalım.', phone: 'Telefon',
      },
    };
    return map[this.language];
  }
}
