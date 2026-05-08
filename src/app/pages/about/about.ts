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
      v1Title: string; v1Text: string;
      v2Title: string; v2Text: string;
      v3Title: string; v3Text: string;
      fleet: string; fleetTitle: string; fleetSub: string;
      vClass: string; vClassDesc: string;
      sClass: string; sClassDesc: string;
      toyota: string; toyotaDesc: string;
      cta: string; ctaBtn: string;
      stat1Num: string; stat1Label: string;
      stat2Num: string; stat2Label: string;
      stat3Num: string; stat3Label: string;
    }> = {
      en: {
        label: 'Our Story', title: 'Travel with', title2: 'Purpose & Precision',
        p1: 'Vardotour was born from a simple conviction: Georgia is one of the world\'s most extraordinary destinations, and every visitor deserves to experience it in absolute comfort and style.',
        p2: 'We are a Tbilisi-based VIP transportation and tour company founded by people who grew up navigating these mountains, valleys, and ancient cities. Our knowledge is lived, not learned from a brochure.',
        p3: 'From a private S-Class transfer to Gergeti Trinity Church, to a week-long journey through Svaneti\'s glacial towers — every Vardotour experience is crafted with the same obsessive attention to detail.',
        v1Title: 'Vetted Vehicles', v1Text: 'Mercedes V-Class, S-Class, and premium 4x4s — maintained to the highest standard for every road condition Georgia can offer.',
        v2Title: 'Expert Guides', v2Text: 'Our guides are lifelong Georgians who speak your language and know every corner of every region. No scripts — only genuine local insight.',
        v3Title: 'Bespoke Journeys', v3Text: 'No two trips are the same. We listen, then design an itinerary around your interests, pace, and budget — from half-day city tours to multi-week expeditions.',
        fleet: 'Our Fleet', fleetTitle: 'Comfort at every altitude',
        fleetSub: 'Three vehicle classes to match every terrain and occasion — each impeccably maintained and fitted for long-distance luxury.',
        vClass: 'Mercedes V-Class', vClassDesc: 'The versatile VIP van for groups up to 7. Spacious, refined, and equally at home on Tbilisi\'s boulevards or Svaneti\'s high-altitude passes.',
        sClass: 'Mercedes S-Class', sClassDesc: 'The pinnacle of automotive luxury. Perfect for private transfers, diplomatic guests, and those who accept nothing but the finest.',
        toyota: 'Premium 4×4', toyotaDesc: 'When the road ends, the journey continues. Our expedition 4×4s take you to Georgia\'s remotest monasteries, canyons, and highland villages.',
        cta: 'Ready to explore Georgia?', ctaBtn: 'Plan Your Journey',
        stat1Num: '10+', stat1Label: 'Years of experience',
        stat2Num: '500+', stat2Label: 'Tours completed',
        stat3Num: '40+', stat3Label: 'Destinations covered',
      },
      geo: {
        label: 'ჩვენი ისტორია', title: 'მოგზაურობა', title2: 'მიზნით და სიზუსტით',
        p1: 'Vardotour დაიბადა მარტივი რწმენიდან: საქართველო მსოფლიოს ერთ-ერთი ყველაზე განსაკუთრებული ადგილია, და ყველა ვიზიტორი იმსახურებს მას სრული კომფორტით და სტილით განიცადოს.',
        p2: 'ჩვენ ვართ თბილისში დაფუძნებული VIP ტრანსპორტის და ტურების კომპანია, დაარსებული ადამიანების მიერ, რომლებიც გაიზარდნენ ამ მთებზე, ველებზე და უძველეს ქალაქებში.',
        p3: 'S-კლასის კერძო გადაყვანიდან გერგეთის სამების ეკლესიამდე, სვანეთის მყინვარული კოშკების გავლით ერთ კვირიანი მოგზაურობამდე — ყოველი Vardotour-ის გამოცდილება კეთდება ერთი და იგივე ყურადღებით.',
        v1Title: 'სანდო მანქანები', v1Text: 'Mercedes V-Class, S-Class და პრემიუმ 4x4 — შენახული უმაღლეს სტანდარტებამდე ნებისმიერი გზის პირობებისთვის.',
        v2Title: 'ექსპერტი გიდები', v2Text: 'ჩვენი გიდები მთელი ცხოვრების ქართველები არიან, რომლებიც საუბრობენ თქვენს ენაზე და იცნობენ ყოველ კუთხეს.',
        v3Title: 'ინდივიდუალური მოგზაურობა', v3Text: 'ორი ტური ერთი არ არის. ჩვენ ვუსმენთ, შემდეგ ვქმნით მარშრუტს თქვენი ინტერესების, ტემპის და ბიუჯეტის გარშემო.',
        fleet: 'ჩვენი ფლოტი', fleetTitle: 'კომფორტი ყოველ სიმაღლეზე',
        fleetSub: 'სამი სატრანსპორტო კლასი ყოველი ტერიტორიისა და შემთხვევისთვის — თითოეული გამართული და მოწყობილი გრძელი მოგზაურობისთვის.',
        vClass: 'Mercedes V-Class', vClassDesc: 'მრავალფეროვანი VIP ფურგონი 7 კაცამდე ჯგუფებისთვის. ფართო, დახვეწილი, და ისევე კომფორტული თბილისის ბულვარებზე, როგორც სვანეთის მაღალ გადასასვლელებზე.',
        sClass: 'Mercedes S-Class', sClassDesc: 'საავტომობილო ფუფუნების მწვერვალი. სრულყოფილი კერძო გადაყვანისთვის.',
        toyota: 'პრემიუმ 4×4', toyotaDesc: 'როდესაც გზა მთავრდება, მოგზაურობა გრძელდება. ჩვენი 4×4 გიყვანთ საქართველოს ყველაზე შორეულ მონასტრებამდე.',
        cta: 'მზად ხართ საქართველოს შესწავლისთვის?', ctaBtn: 'დაგეგმეთ მოგზაურობა',
        stat1Num: '10+', stat1Label: 'წლის გამოცდილება',
        stat2Num: '500+', stat2Label: 'ჩატარებული ტური',
        stat3Num: '40+', stat3Label: 'დაფარული მიმართულება',
      },
      ru: {
        label: 'Наша история', title: 'Путешествия с', title2: 'целью и точностью',
        p1: 'Vardotour родился из простого убеждения: Грузия — одно из самых удивительных мест в мире, и каждый гость заслуживает открыть её в абсолютном комфорте и стиле.',
        p2: 'Мы — тбилисская компания VIP-трансферов и туров, основанная людьми, которые выросли среди этих гор, долин и древних городов. Наши знания прожиты, а не вычитаны из брошюры.',
        p3: 'От частного трансфера на S-Class к церкви Гергети до недельного путешествия сквозь башни Сванетии — каждый тур Vardotour создаётся с одержимым вниманием к деталям.',
        v1Title: 'Проверенные автомобили', v1Text: 'Mercedes V-Class, S-Class и премиальные внедорожники — обслуживаются по высочайшим стандартам для любых дорожных условий.',
        v2Title: 'Опытные гиды', v2Text: 'Наши гиды — настоящие грузины, говорящие на вашем языке и знающие каждый уголок каждого региона.',
        v3Title: 'Индивидуальные маршруты', v3Text: 'Нет двух одинаковых поездок. Мы слушаем, затем создаём маршрут под ваши интересы, темп и бюджет.',
        fleet: 'Наш автопарк', fleetTitle: 'Комфорт на любой высоте',
        fleetSub: 'Три класса автомобилей для любого рельефа и повода — каждый безупречно обслуживается и оснащён для дальних поездок.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Универсальный VIP-минивэн для групп до 7 человек. Просторный, изысканный — одинаково хорош на бульварах Тбилиси и горных перевалах Сванетии.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Вершина автомобильной роскоши. Идеален для частных трансферов и самых взыскательных гостей.',
        toyota: 'Премиум 4×4', toyotaDesc: 'Там, где заканчивается дорога, путешествие продолжается. Наши внедорожники доставят вас к самым отдалённым монастырям и горным сёлам.',
        cta: 'Готовы исследовать Грузию?', ctaBtn: 'Спланировать поездку',
        stat1Num: '10+', stat1Label: 'лет опыта',
        stat2Num: '500+', stat2Label: 'туров выполнено',
        stat3Num: '40+', stat3Label: 'направлений охвачено',
      },
      ar: {
        label: 'قصتنا', title: 'سافر مع', title2: 'هدف ودقة',
        p1: 'وُلدت فاردوتور من قناعة بسيطة: جورجيا واحدة من أكثر الوجهات استثنائية في العالم، وكل زائر يستحق اختبارها بكامل الراحة والأناقة.',
        p2: 'نحن شركة نقل VIP وجولات مقرها تبليسي، أسسها أشخاص نشأوا في هذه الجبال والوديان والمدن القديمة.',
        p3: 'من نقل خاص بالدرجة S إلى كنيسة جيرجيتي، إلى رحلة أسبوع عبر أبراج سفانيتي الجليدية — كل تجربة فاردوتور تُصمَّم باهتمام بالغ بالتفاصيل.',
        v1Title: 'مركبات موثوقة', v1Text: 'مرسيدس V-Class وS-Class ودفع رباعي فاخر، مُصانة بأعلى المعايير لكل ظروف الطرق.',
        v2Title: 'مرشدون خبراء', v2Text: 'مرشدونا جورجيون متمرسون يتحدثون لغتك ويعرفون كل ركن من كل منطقة.',
        v3Title: 'رحلات مخصصة', v3Text: 'لا توجد رحلتان متشابهتان. نستمع ثم نصمم مسار يناسب اهتماماتك وإيقاعك وميزانيتك.',
        fleet: 'أسطولنا', fleetTitle: 'راحة على كل ارتفاع',
        fleetSub: 'ثلاث فئات مركبات لكل تضاريس ومناسبة — كل منها مُصانة بعناية ومجهزة للرحلات الطويلة.',
        vClass: 'مرسيدس V-Class', vClassDesc: 'حافلة VIP متعددة الاستخدامات للمجموعات حتى 7 أشخاص.',
        sClass: 'مرسيدس S-Class', sClassDesc: 'قمة الفخامة. مثالية للنقل الخاص.',
        toyota: 'دفع رباعي فاخر', toyotaDesc: 'عندما تنتهي الطريق، تستمر الرحلة.',
        cta: 'هل أنت مستعد لاستكشاف جورجيا؟', ctaBtn: 'خطط لرحلتك',
        stat1Num: '+10', stat1Label: 'سنوات من الخبرة',
        stat2Num: '+500', stat2Label: 'جولة مكتملة',
        stat3Num: '+40', stat3Label: 'وجهة مشمولة',
      },
      es: {
        label: 'Nuestra historia', title: 'Viaja con', title2: 'propósito y precisión',
        p1: 'Vardotour nació de una convicción simple: Georgia es uno de los destinos más extraordinarios del mundo, y cada visitante merece vivirlo con absoluta comodidad y estilo.',
        p2: 'Somos una empresa de transporte VIP y tours con sede en Tiflis, fundada por personas que crecieron entre estas montañas, valles y ciudades milenarias.',
        p3: 'Desde un traslado privado en S-Class a la Iglesia Gergeti hasta una semana por las torres glaciares de Svaneti — cada experiencia Vardotour se diseña con obsesiva atención al detalle.',
        v1Title: 'Vehículos verificados', v1Text: 'Mercedes V-Class, S-Class y 4x4 premium, mantenidos al más alto estándar para cualquier condición vial.',
        v2Title: 'Guías expertos', v2Text: 'Nuestros guías son georgianos de toda la vida que hablan tu idioma y conocen cada rincón de cada región.',
        v3Title: 'Viajes a medida', v3Text: 'No hay dos viajes iguales. Escuchamos y diseñamos un itinerario según tus intereses, ritmo y presupuesto.',
        fleet: 'Nuestra flota', fleetTitle: 'Comodidad a cualquier altitud',
        fleetSub: 'Tres categorías de vehículos para cada terreno y ocasión, impecablemente mantenidos.',
        vClass: 'Mercedes V-Class', vClassDesc: 'La furgoneta VIP versátil para grupos de hasta 7 personas.',
        sClass: 'Mercedes S-Class', sClassDesc: 'La cima del lujo automovilístico. Ideal para traslados privados.',
        toyota: 'Todo terreno premium', toyotaDesc: 'Cuando termina la carretera, continúa el viaje.',
        cta: '¿Listo para explorar Georgia?', ctaBtn: 'Planifica tu viaje',
        stat1Num: '10+', stat1Label: 'Años de experiencia',
        stat2Num: '500+', stat2Label: 'Tours completados',
        stat3Num: '40+', stat3Label: 'Destinos cubiertos',
      },
      fr: {
        label: 'Notre histoire', title: 'Voyager avec', title2: 'but et précision',
        p1: 'Vardotour est né d\'une conviction simple : la Géorgie est l\'une des destinations les plus extraordinaires au monde, et chaque visiteur mérite de la vivre dans un confort et un style absolus.',
        p2: 'Nous sommes une société de transport VIP et de tours basée à Tbilissi, fondée par des personnes qui ont grandi dans ces montagnes, vallées et villes millénaires.',
        p3: 'D\'un transfert privé en S-Class à l\'église Gergeti à une semaine dans les tours glaciaires de Svanétie — chaque expérience Vardotour est conçue avec une attention obsessionnelle aux détails.',
        v1Title: 'Véhicules vérifiés', v1Text: 'Mercedes V-Class, S-Class et 4x4 premium, entretenus au plus haut standard.',
        v2Title: 'Guides experts', v2Text: 'Nos guides sont des Géorgiens de toujours qui parlent votre langue et connaissent chaque recoin.',
        v3Title: 'Voyages sur mesure', v3Text: 'Pas deux voyages identiques. Nous écoutons puis créons un itinéraire autour de vos intérêts.',
        fleet: 'Notre flotte', fleetTitle: 'Confort à toute altitude',
        fleetSub: 'Trois catégories de véhicules pour chaque terrain et occasion.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Le van VIP polyvalent pour les groupes jusqu\'à 7 personnes.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Le summum du luxe automobile. Idéal pour les transferts privés.',
        toyota: '4×4 premium', toyotaDesc: 'Quand la route se termine, le voyage continue.',
        cta: 'Prêt à explorer la Géorgie ?', ctaBtn: 'Planifiez votre voyage',
        stat1Num: '10+', stat1Label: 'Années d\'expérience',
        stat2Num: '500+', stat2Label: 'Tours réalisés',
        stat3Num: '40+', stat3Label: 'Destinations couvertes',
      },
      it: {
        label: 'La nostra storia', title: 'Viaggia con', title2: 'scopo e precisione',
        p1: 'Vardotour è nata da una semplice convinzione: la Georgia è una delle destinazioni più straordinarie al mondo, e ogni visitatore merita di viverla con assoluto comfort e stile.',
        p2: 'Siamo una società di trasporti VIP e tour con sede a Tbilisi, fondata da persone cresciute tra queste montagne, vallate e città millenarie.',
        p3: 'Da un trasferimento privato in S-Class alla chiesa di Gergeti a una settimana tra le torri glaciali della Svaneti — ogni esperienza Vardotour è realizzata con attenzione ossessiva ai dettagli.',
        v1Title: 'Veicoli certificati', v1Text: 'Mercedes V-Class, S-Class e 4x4 premium, mantenuti al massimo standard per ogni condizione stradale.',
        v2Title: 'Guide esperte', v2Text: 'Le nostre guide sono georgiani di lunga data che parlano la tua lingua e conoscono ogni angolo.',
        v3Title: 'Viaggi su misura', v3Text: 'Non ci sono due viaggi uguali. Ascoltiamo e progettiamo un itinerario attorno ai tuoi interessi.',
        fleet: 'Il nostro parco auto', fleetTitle: 'Comfort ad ogni altitudine',
        fleetSub: 'Tre categorie di veicoli per ogni terreno e occasione.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Il furgone VIP versatile per gruppi fino a 7 persone.',
        sClass: 'Mercedes S-Class', sClassDesc: 'L\'apice del lusso automobilistico. Ideale per trasferimenti privati.',
        toyota: '4×4 premium', toyotaDesc: 'Quando finisce la strada, il viaggio continua.',
        cta: 'Pronti a esplorare la Georgia?', ctaBtn: 'Pianifica il tuo viaggio',
        stat1Num: '10+', stat1Label: 'Anni di esperienza',
        stat2Num: '500+', stat2Label: 'Tour completati',
        stat3Num: '40+', stat3Label: 'Destinazioni coperte',
      },
      de: {
        label: 'Unsere Geschichte', title: 'Reisen mit', title2: 'Zweck und Präzision',
        p1: 'Vardotour entstand aus einer einfachen Überzeugung: Georgien ist eines der außergewöhnlichsten Reiseziele der Welt, und jeder Besucher verdient es, es in absolutem Komfort und Stil zu erleben.',
        p2: 'Wir sind ein VIP-Transport- und Tourunternehmen mit Sitz in Tiflis, gegründet von Menschen, die in diesen Bergen, Tälern und alten Städten aufgewachsen sind.',
        p3: 'Von einem privaten S-Class-Transfer zur Gergeti Trinity Church bis zu einer Woche durch die Gletscher-Türme Swaniens — jedes Vardotour-Erlebnis wird mit obsessiver Liebe zum Detail gestaltet.',
        v1Title: 'Geprüfte Fahrzeuge', v1Text: 'Mercedes V-Class, S-Class und Premium-4x4 — nach höchsten Standards für jede Straßenbedingung gewartet.',
        v2Title: 'Erfahrene Guides', v2Text: 'Unsere Guides sind lebenslange Georgier, die Ihre Sprache sprechen und jeden Winkel jeder Region kennen.',
        v3Title: 'Maßgeschneiderte Reisen', v3Text: 'Keine zwei Reisen sind gleich. Wir hören zu und entwerfen eine Route rund um Ihre Interessen.',
        fleet: 'Unsere Flotte', fleetTitle: 'Komfort auf jeder Höhe',
        fleetSub: 'Drei Fahrzeugklassen für jedes Gelände und jeden Anlass.',
        vClass: 'Mercedes V-Class', vClassDesc: 'Der vielseitige VIP-Van für Gruppen bis zu 7 Personen.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Der Gipfel des automobilen Luxus. Ideal für private Transfers.',
        toyota: 'Premium-Geländewagen', toyotaDesc: 'Wo die Straße endet, geht die Reise weiter.',
        cta: 'Bereit, Georgien zu erkunden?', ctaBtn: 'Reise planen',
        stat1Num: '10+', stat1Label: 'Jahre Erfahrung',
        stat2Num: '500+', stat2Label: 'Touren abgeschlossen',
        stat3Num: '40+', stat3Label: 'Destinationen abgedeckt',
      },
      zh: {
        label: '我们的故事', title: '带着', title2: '目标与精准出发',
        p1: 'Vardotour源于一个简单的信念：格鲁吉亚是世界上最非凡的目的地之一，每位游客都值得以绝对的舒适与风格体验它。',
        p2: '我们是一家总部位于第比利斯的VIP交通和旅游公司，由在这些山脉、山谷和古老城市中长大的人创立。',
        p3: '从乘坐S级轿车私人前往格尔盖提三一教堂，到穿越斯瓦涅季冰川塔楼的一周旅程——每一次Vardotour体验都以对细节的极致关注精心打造。',
        v1Title: '经过认证的车辆', v1Text: '梅赛德斯V级、S级和高端四驱车——按最高标准维护，适应格鲁吉亚各种路况。',
        v2Title: '专业导游', v2Text: '我们的导游是土生土长的格鲁吉亚人，能说您的语言，熟知每个地区的每个角落。',
        v3Title: '定制旅程', v3Text: '没有两次旅程是相同的。我们倾听，然后根据您的兴趣、节奏和预算设计行程。',
        fleet: '我们的车队', fleetTitle: '每个海拔的舒适体验',
        fleetSub: '三种车型适应各种地形和场合。',
        vClass: '梅赛德斯V级', vClassDesc: '可容纳7人的多功能VIP厢式车。',
        sClass: '梅赛德斯S级', sClassDesc: '汽车奢华的顶峰。私人接送的完美之选。',
        toyota: '高端四驱车', toyotaDesc: '道路尽头，旅程继续。',
        cta: '准备好探索格鲁吉亚了吗？', ctaBtn: '规划您的旅程',
        stat1Num: '10+', stat1Label: '年经验',
        stat2Num: '500+', stat2Label: '完成旅游',
        stat3Num: '40+', stat3Label: '覆盖目的地',
      },
      tr: {
        label: 'Hikayemiz', title: 'Amaç ve', title2: 'Hassasiyetle Seyahat',
        p1: 'Vardotour basit bir inançla doğdu: Gürcistan dünyanın en olağanüstü destinasyonlarından biri ve her ziyaretçi onu mutlak konfor ve şıklıkla deneyimlemeyi hak ediyor.',
        p2: 'Tiflis merkezli bir VIP ulaşım ve tur şirketiyiz; bu dağlarda, vadilerde ve kadim şehirlerde büyüyen insanlar tarafından kurulduk.',
        p3: 'Gergeti Kilisesi\'ne özel S-Class transferden Svaneti\'nin buzul kulelerinde geçen bir haftaya kadar — her Vardotour deneyimi ayrıntılara takıntılı bir dikkatle tasarlanır.',
        v1Title: 'Onaylı Araçlar', v1Text: 'Mercedes V-Class, S-Class ve premium 4x4 — her yol koşulu için en yüksek standartta bakımlı.',
        v2Title: 'Uzman Rehberler', v2Text: 'Rehberlerimiz, dilinizi konuşan ve her bölgenin her köşesini bilen Gürcülerdir.',
        v3Title: 'Kişiye Özel Yolculuklar', v3Text: 'Hiçbir iki yolculuk aynı değil. Dinliyor, ardından ilgi alanlarınıza göre güzergah tasarlıyoruz.',
        fleet: 'Filomuz', fleetTitle: 'Her rakımda konfor',
        fleetSub: 'Her arazi ve durum için üç araç sınıfı.',
        vClass: 'Mercedes V-Class', vClassDesc: '7 kişiye kadar gruplar için çok amaçlı VIP minibüs.',
        sClass: 'Mercedes S-Class', sClassDesc: 'Otomobil lüksünün zirvesi. Özel transferler için mükemmel.',
        toyota: 'Premium 4×4', toyotaDesc: 'Yol bittiğinde yolculuk devam eder.',
        cta: 'Gürcistan\'ı keşfetmeye hazır mısınız?', ctaBtn: 'Yolculuğunuzu Planlayın',
        stat1Num: '10+', stat1Label: 'Yıl deneyim',
        stat2Num: '500+', stat2Label: 'Tamamlanan tur',
        stat3Num: '40+', stat3Label: 'Kapsanan destinasyon',
      },
    };
    return map[this.language];
  }
}
