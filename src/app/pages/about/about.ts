import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService, LangCode } from '../../services/language.service';
import { CarSliderComponent } from '../../shared/car-slider/car-slider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, CarSliderComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  language: LangCode = 'en';

  constructor(private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  get T() {
    const map: Record<LangCode, {
      label: string; title: string; title2: string;
      p1: string; p2: string; p3: string;
      v2Title: string; v2Text: string;
      v3Title: string; v3Text: string;
      fleet: string; fleetTitle: string; fleetSub: string;
      vClass: string; vClassDesc: string;
      sClass: string; sClassDesc: string;
      cta: string; ctaBtn: string;
      stat1Num: string; stat1Label: string;
      stat2Num: string; stat2Label: string;
      stat3Num: string; stat3Label: string;
    }> = {
      en: {
        label: 'Our Story', title: 'About', title2: 'Vardotour',
        p1: 'Georgia is one of the most beautiful countries in the world. We help you discover it in full comfort and style.',
        p2: 'We are a VIP transport and tour company based in Tbilisi. Our team is local and knows every corner of Georgia.',
        p3: 'Every trip is planned just for you — from a half-day tour to a full week journey.',
        v2Title: 'Expert Guides', v2Text: 'Our guides are local Georgians who speak your language and know every region.',
        v3Title: 'Custom Trips', v3Text: 'We listen to your needs and plan the perfect route for you.',
        fleet: 'Our Cars', fleetTitle: 'Travel in Comfort',
        fleetSub: 'Three luxury vehicle types for every road and occasion.',
        vClass: 'Mercedes V-Class', vClassDesc: 'A spacious VIP van for groups of up to 7 people. Comfortable on any road.',
        sClass: 'Mercedes S-Class', sClassDesc: 'The top luxury car for private transfers. Maximum comfort guaranteed.',
        cta: 'Ready to explore Georgia?', ctaBtn: 'Plan Your Trip',
        stat1Num: '10+', stat1Label: 'Years of experience',
        stat2Num: '500+', stat2Label: 'Tours completed',
        stat3Num: '40+', stat3Label: 'Destinations covered',
      },
      geo: {
        label: 'ჩვენი ისტორია', title: 'ჩვენ შესახებ', title2: 'Vardotour',
        p1: 'საქართველო მსოფლიოს ერთ-ერთი ულამაზესი ქვეყანაა. ჩვენ დაგეხმარებით მის კომფორტულად აღმოჩენაში.',
        p2: 'ჩვენ ვართ VIP ტრანსპორტის და ტურების კომპანია თბილისიდან. ჩვენი გუნდი ადგილობრივია.',
        p3: 'ყოველი ტური დაგეგმილია სპეციალურად თქვენთვის — ნახევარდღიანი ექსკურსიიდან სრულ კვირამდე.',
        v2Title: 'გამოცდილი გიდები', v2Text: 'ჩვენი გიდები ადგილობრივი ქართველები არიან, რომლებიც საუბრობენ თქვენს ენაზე.',
        v3Title: 'ინდივიდუალური ტურები', v3Text: 'ჩვენ ვუსმენთ თქვენს სურვილებს და ვქმნით სრულყოფილ მარშრუტს.',
        fleet: 'ჩვენი მანქანები', fleetTitle: 'კომფორტული მგზაურობა',
        fleetSub: 'სამი ტიპის ფუფუნების მანქანა ნებისმიერი გზისა და შემთხვევისთვის.',
        vClass: 'Mercedes V-Class', vClassDesc: 'ფართო VIP მინივენი 7 ადამიანამდე ჯგუფებისთვის. კომფორტული ნებისმიერ გზაზე.',
        sClass: 'Mercedes S-Class', sClassDesc: 'საუკეთესო ფუფუნების მანქანა კერძო ტრანსფერისთვის.',
        cta: 'მზად ხართ საქართველოს შესასწავლად?', ctaBtn: 'დაგეგმეთ ტური',
        stat1Num: '10+', stat1Label: 'წლის გამოცდილება',
        stat2Num: '500+', stat2Label: 'ჩატარებული ტური',
        stat3Num: '40+', stat3Label: 'დაფარული მიმართულება',
      },
      ru: {
        label: 'Наша история', title: 'О нас', title2: 'Vardotour',
        p1: 'Грузия — одна из самых красивых стран мира. Мы поможем вам открыть её с полным комфортом.',
        p2: 'Мы — компания VIP-трансферов и туров из Тбилиси. Наша команда — местные жители, знающие Грузию вдоль и поперёк.',
        p3: 'Каждая поездка планируется специально для вас — от полудня до целой недели.',
        v2Title: 'Опытные гиды', v2Text: 'Наши гиды — местные грузины, говорящие на вашем языке и знающие каждый регион.',
        v3Title: 'Индивидуальные туры', v3Text: 'Мы слушаем вас и планируем идеальный маршрут.',
        fleet: 'Наши машины', fleetTitle: 'Путешествуйте с комфортом',
        fleetSub: 'Три класса люксовых автомобилей для любой дороги и случая.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Просторный VIP-минивэн для групп до 7 человек. Комфорт на любой дороге.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Лучший автомобиль для частных трансферов. Максимальный комфорт.',
        cta: 'Готовы открыть Грузию?', ctaBtn: 'Спланировать поездку',
        stat1Num: '10+', stat1Label: 'лет опыта',
        stat2Num: '500+', stat2Label: 'туров выполнено',
        stat3Num: '40+', stat3Label: 'направлений охвачено',
      },
      ar: {
        label: 'قصتنا', title: 'من نحن', title2: 'Vardotour',
        p1: 'جورجيا من أجمل دول العالم. نحن نساعدك على اكتشافها بكل راحة وأناقة.',
        p2: 'نحن شركة نقل VIP وجولات سياحية في تبليسي. فريقنا محلي ويعرف كل مكان في جورجيا.',
        p3: 'كل رحلة نخططها خصيصاً لك — من نصف يوم إلى أسبوع كامل.',
        v2Title: 'مرشدون محترفون', v2Text: 'مرشدونا جورجيون محليون يتحدثون لغتك ويعرفون كل منطقة.',
        v3Title: 'رحلات مخصصة', v3Text: 'نستمع لاحتياجاتك ونخطط الرحلة المثالية لك.',
        fleet: 'سياراتنا', fleetTitle: 'سافر براحة',
        fleetSub: 'ثلاثة أنواع من السيارات الفاخرة لكل طريق ومناسبة.',
        vClass: 'Mercedes V-Class', vClassDesc: 'سيارة VIP فسيحة للمجموعات حتى 7 أشخاص. مريحة على أي طريق.',
        sClass: 'Mercedes S-Class', sClassDesc: 'أفضل سيارة للنقل الخاص. راحة وفخامة تامة.',
        cta: 'هل أنت مستعد لاستكشاف جورجيا؟', ctaBtn: 'احجز رحلتك',
        stat1Num: '+10', stat1Label: 'سنوات من الخبرة',
        stat2Num: '+500', stat2Label: 'جولة مكتملة',
        stat3Num: '+40', stat3Label: 'وجهة مشمولة',
      },
      es: {
        label: 'Nuestra historia', title: 'Sobre', title2: 'Vardotour',
        p1: 'Georgia es uno de los países más hermosos del mundo. Te ayudamos a descubrirlo con total comodidad.',
        p2: 'Somos una empresa de transporte VIP y tours en Tbilisi. Nuestro equipo es local y conoce cada rincón de Georgia.',
        p3: 'Cada viaje se planifica solo para ti — desde medio día hasta una semana completa.',
        v2Title: 'Guías expertos', v2Text: 'Nuestros guías son georgianos locales que hablan tu idioma y conocen cada región.',
        v3Title: 'Viajes a medida', v3Text: 'Escuchamos tus necesidades y planificamos la ruta perfecta.',
        fleet: 'Nuestros autos', fleetTitle: 'Viaja con comodidad',
        fleetSub: 'Tres tipos de vehículos de lujo para cada camino y ocasión.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Una furgoneta VIP espaciosa para grupos de hasta 7 personas. Cómoda en cualquier camino.',
        sClass: 'Mercedes S-Class', sClassDesc: 'El mejor auto para traslados privados. Máxima comodidad garantizada.',
        cta: '¿Listo para explorar Georgia?', ctaBtn: 'Planifica tu viaje',
        stat1Num: '10+', stat1Label: 'Años de experiencia',
        stat2Num: '500+', stat2Label: 'Tours completados',
        stat3Num: '40+', stat3Label: 'Destinos cubiertos',
      },
      fr: {
        label: 'Notre histoire', title: 'À propos de', title2: 'Vardotour',
        p1: 'La Géorgie est l\'un des plus beaux pays du monde. Nous vous aidons à la découvrir en tout confort.',
        p2: 'Nous sommes une société de transport VIP et de tours à Tbilissi. Notre équipe est locale et connaît chaque coin de la Géorgie.',
        p3: 'Chaque voyage est planifié rien que pour vous — d\'une demi-journée à une semaine complète.',
        v2Title: 'Guides experts', v2Text: 'Nos guides sont des Géorgiens locaux qui parlent votre langue et connaissent chaque région.',
        v3Title: 'Voyages sur mesure', v3Text: 'Nous écoutons vos besoins et planifions le voyage parfait.',
        fleet: 'Nos voitures', fleetTitle: 'Voyagez confortablement',
        fleetSub: 'Trois types de véhicules de luxe pour chaque route et occasion.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Un van VIP spacieux pour les groupes jusqu\'à 7 personnes. Confortable sur toutes les routes.',
        sClass: 'Mercedes S-Class', sClassDesc: 'La meilleure voiture pour les transferts privés. Confort maximum garanti.',
        cta: 'Prêt à explorer la Géorgie ?', ctaBtn: 'Planifiez votre voyage',
        stat1Num: '10+', stat1Label: 'Années d\'expérience',
        stat2Num: '500+', stat2Label: 'Tours réalisés',
        stat3Num: '40+', stat3Label: 'Destinations couvertes',
      },
      it: {
        label: 'La nostra storia', title: 'Chi è', title2: 'Vardotour',
        p1: 'La Georgia è uno dei paesi più belli del mondo. Ti aiutiamo a scoprirla con tutto il comfort.',
        p2: 'Siamo una società di trasporti VIP e tour a Tbilisi. Il nostro team è locale e conosce ogni angolo della Georgia.',
        p3: 'Ogni viaggio è pianificato solo per te — da mezza giornata a una settimana intera.',
        v2Title: 'Guide esperte', v2Text: 'Le nostre guide sono georgiani locali che parlano la tua lingua e conoscono ogni regione.',
        v3Title: 'Viaggi su misura', v3Text: 'Ascoltiamo le tue esigenze e pianifichiamo il percorso perfetto.',
        fleet: 'Le nostre auto', fleetTitle: 'Viaggia con comfort',
        fleetSub: 'Tre tipi di veicoli di lusso per ogni strada e occasione.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Un van VIP spazioso per gruppi fino a 7 persone. Comodo su qualsiasi strada.',
        sClass: 'Mercedes S-Class', sClassDesc: 'La migliore auto per i trasferimenti privati. Massimo comfort garantito.',
        cta: 'Pronto a esplorare la Georgia?', ctaBtn: 'Pianifica il tuo viaggio',
        stat1Num: '10+', stat1Label: 'Anni di esperienza',
        stat2Num: '500+', stat2Label: 'Tour completati',
        stat3Num: '40+', stat3Label: 'Destinazioni coperte',
      },
      de: {
        label: 'Unsere Geschichte', title: 'Über', title2: 'Vardotour',
        p1: 'Georgien ist eines der schönsten Länder der Welt. Wir helfen Ihnen, es in vollem Komfort zu entdecken.',
        p2: 'Wir sind ein VIP-Transport- und Tourunternehmen in Tiflis. Unser Team ist lokal und kennt jeden Winkel Georgiens.',
        p3: 'Jede Reise wird nur für Sie geplant — von einem halben Tag bis zu einer ganzen Woche.',
        v2Title: 'Erfahrene Guides', v2Text: 'Unsere Guides sind einheimische Georgier, die Ihre Sprache sprechen und jede Region kennen.',
        v3Title: 'Individuelle Reisen', v3Text: 'Wir hören auf Ihre Bedürfnisse und planen die perfekte Route.',
        fleet: 'Unsere Autos', fleetTitle: 'Komfortabel reisen',
        fleetSub: 'Drei Luxusfahrzeugtypen für jede Straße und jeden Anlass.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Ein geräumiger VIP-Van für Gruppen bis zu 7 Personen. Komfortabel auf jeder Straße.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Das beste Auto für private Transfers. Maximaler Komfort garantiert.',
        cta: 'Bereit, Georgien zu entdecken?', ctaBtn: 'Reise planen',
        stat1Num: '10+', stat1Label: 'Jahre Erfahrung',
        stat2Num: '500+', stat2Label: 'Touren abgeschlossen',
        stat3Num: '40+', stat3Label: 'Destinationen abgedeckt',
      },
      zh: {
        label: '我们的故事', title: '关于', title2: 'Vardotour',
        p1: '格鲁吉亚是世界上最美丽的国家之一。我们帮助您舒适地探索它。',
        p2: '我们是一家位于第比利斯的VIP交通和旅游公司。我们的团队是本地人，了解格鲁吉亚的每个角落。',
        p3: '每次旅行都专为您规划 — 从半天游到整整一周的行程。',
        v2Title: '专业导游', v2Text: '我们的导游是本地格鲁吉亚人，能说您的语言，熟悉每个地区。',
        v3Title: '定制行程', v3Text: '我们倾听您的需求，为您规划完美路线。',
        fleet: '我们的车辆', fleetTitle: '舒适出行',
        fleetSub: '三种豪华车型，适合各种路况和场合。',
        vClass: '梅赛德斯V级', vClassDesc: '可容纳7人的宽敞VIP厢式车，任何路况下都舒适。',
        sClass: '梅赛德斯S级', sClassDesc: '私人接送的最佳豪华车。舒适有保障。',
        cta: '准备好探索格鲁吉亚了吗？', ctaBtn: '规划您的旅程',
        stat1Num: '10+', stat1Label: '年经验',
        stat2Num: '500+', stat2Label: '完成旅游',
        stat3Num: '40+', stat3Label: '覆盖目的地',
      },
      tr: {
        label: 'Hikayemiz', title: 'Hakkında', title2: 'Vardotour',
        p1: 'Gürcistan dünyanın en güzel ülkelerinden biridir. Size tam konforla keşfetmenize yardımcı oluyoruz.',
        p2: 'Tiflis\'te kurulu bir VIP ulaşım ve tur şirketiyiz. Ekibimiz yerel ve Gürcistan\'ın her köşesini biliyor.',
        p3: 'Her yolculuk sadece sizin için planlanır — yarım günlük turdan tam bir haftaya kadar.',
        v2Title: 'Uzman Rehberler', v2Text: 'Rehberlerimiz dilinizi konuşan ve her bölgeyi tanıyan yerel Gürcülerdir.',
        v3Title: 'Kişiye Özel Turlar', v3Text: 'İhtiyaçlarınızı dinleyip sizin için mükemmel rotayı planlarız.',
        fleet: 'Araçlarımız', fleetTitle: 'Konforla seyahat edin',
        fleetSub: 'Her yol ve durum için üç lüks araç tipi.',
        vClass: 'Mercedes V-Class', vClassDesc: '7 kişiye kadar gruplar için geniş bir VIP minibüs. Her yolda rahat.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Özel transferler için en iyi lüks araç. Maksimum konfor garantili.',
        cta: 'Gürcistan\'ı keşfetmeye hazır mısınız?', ctaBtn: 'Yolculuğunuzu planlayın',
        stat1Num: '10+', stat1Label: 'Yıl deneyim',
        stat2Num: '500+', stat2Label: 'Tamamlanan tur',
        stat3Num: '40+', stat3Label: 'Kapsanan destinasyon',
      },
    };
    return map[this.language];
  }
}
