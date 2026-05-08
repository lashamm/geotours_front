import { Injectable } from '@angular/core';
import { LangCode } from './language.service';

export interface CuisineItem {
  image: string;
  name: string;
  nameGeo: string;
  nameRu: string;
  desc: string;
  descGeo: string;
  descRu: string;
}

export interface Review {
  name: string;
  country: string;
  rating: number;
  date: string;
  comment: string;
  commentGeo: string;
  commentRu: string;
  initials: string;
}

export interface TourStrings {
  title: string;
  region: string;
  tag: string;
  shortDescription: string;
  highlights: string[];
}

export interface Tour {
  id: number;
  title: string;
  region: string;
  duration: string;
  // price: number;
  image: string;
  images?: string[];
  cuisine?: string[];
  cuisineItems?: CuisineItem[];
  reviews?: Review[];
  tag: string;
  shortDescription: string;
  highlights: string[];
  groupSize: string;
}

@Injectable({ providedIn: 'root' })
export class TourService {

  private i18n: Record<number, Partial<Record<LangCode, TourStrings>>> = {
    1: {
      geo: { title: 'სვანეთის მთის ექსპედიცია', region: 'სვანეთი', tag: 'მთები', shortDescription: 'გაიარეთ უძველესი სვანური კოშკები და მყინვარული ველები კავკასიონის სახურავზე.', highlights: ['მესტია-უშგული ლაშქრობა', 'იუნესკოს სვანური კოშკები', 'შხარის მყინვარის ხედი', 'სვანი ოჯახში სტუმრობა'] },
      ru: { title: 'Горная экспедиция в Сванетию', region: 'Сванетия', tag: 'Горы', shortDescription: 'Пройдите через древние сванские башни и ледниковые долины на крыше Кавказа.', highlights: ['Треккинг Местиа–Ушгули', 'Башни ЮНЕСКО', 'Смотровая на ледник Шхара', 'Ночлег в сванской семье'] },
      ar: { title: 'رحلة جبال سفانيتي', region: 'سفانيتي', tag: 'جبال', shortDescription: 'اخترق أبراج السفانيين القديمة والوديان الجليدية على سطح جبال القوقاز.', highlights: ['مسار ميستيا-أوشغولي', 'أبراج السفانيين (يونسكو)', 'منظر نهر الجليد شخارا', 'ضيافة عائلة سفانية'] },
      es: { title: 'Expedición a las Montañas de Svaneti', region: 'Svaneti', tag: 'Montañas', shortDescription: 'Recorre las antiguas torres svan y valles glaciares en el techo del Cáucaso.', highlights: ['Trekking Mestia-Ushguli', 'Torres Svan (UNESCO)', 'Mirador glaciar Shkhara', 'Alojamiento con familia svan'] },
      fr: { title: 'Expédition dans les Montagnes de Svanétie', region: 'Svanétie', tag: 'Montagnes', shortDescription: 'Traversez les anciennes tours svanes et vallées glaciaires au sommet du Caucase.', highlights: ['Randonnée Mestia–Ushguli', 'Tours svanes (UNESCO)', 'Panorama sur le glacier Shkhara', 'Séjour en famille svane'] },
      it: { title: 'Spedizione sulle Montagne della Svaneti', region: 'Svaneti', tag: 'Montagne', shortDescription: 'Percorri le antiche torri svan e le valli glaciali sul tetto del Caucaso.', highlights: ['Trek Mestia-Ushguli', 'Torri Svan (UNESCO)', 'Vista sul ghiacciaio Shkhara', 'Soggiorno presso famiglia svan'] },
      de: { title: 'Bergexpedition in Swanetien', region: 'Swanetien', tag: 'Berge', shortDescription: 'Durchqueren Sie uralte Swanentürme und Gletschertäler auf dem Dach des Kaukasus.', highlights: ['Trekking Mestia–Uschguli', 'UNESCO-Swanentürme', 'Aussichtspunkt Schkhara-Gletscher', 'Übernachtung bei svanischer Familie'] },
      zh: { title: '斯瓦涅季山地探险', region: '斯瓦涅季', tag: '山地', shortDescription: '穿越高加索屋脊的古代斯瓦涅季塔楼和冰川山谷。', highlights: ['梅斯蒂亚至乌什古利徒步', '联合国教科文组织斯瓦涅季塔楼', '什哈拉冰川观景台', '斯瓦涅季家庭寄宿'] },
      tr: { title: 'Svaneti Dağ Keşfi', region: 'Svaneti', tag: 'Dağlar', shortDescription: "Kafkasya'nın çatısındaki kadim Svan kuleleri ve buzul vadilerini keşfedin.", highlights: ['Mestia-Uşguli Yürüyüşü', 'UNESCO Svan Kuleleri', 'Şhara Buzul Manzarası', 'Svan Aile Konaklaması'] },
    },
    2: {
      geo: { title: 'კახეთის ღვინო და კულტურა', region: 'კახეთი', tag: 'ღვინო', shortDescription: 'შეისწავლეთ საქართველოს უძველესი სამეგობრო რეგიონი, მოკრიფეთ ყურძენი და დაეუფლეთ ქვევრის ღვინის დამზადებას.', highlights: ['პირადი ღვინის დეგუსტაცია თელავში', 'ალაზნის ველის ვენახის სეირნობა', 'ალავერდის მონასტრის ვიზიტი', 'ტრადიციული სუფრა'] },
      ru: { title: 'Вина и культура Кахетии', region: 'Кахетия', tag: 'Вино', shortDescription: 'Откройте для себя старейший винный регион Грузии, соберите виноград и освойте виноделие в квеври.', highlights: ['Частные дегустации в Телави', 'Прогулка по Алазанской долине', 'Монастырь Алаверди', 'Традиционная грузинская пирушка'] },
      ar: { title: 'نبيذ وثقافة كاخيتي', region: 'كاخيتي', tag: 'نبيذ', shortDescription: 'استكشف أعرق مناطق الكروم في جورجيا واحصد العنب وتعلم صناعة النبيذ في القِرَب الفخارية.', highlights: ['تذوق خاص للنبيذ في تيلافي', 'جولة في وادي ألازاني', 'زيارة دير ألافيردي', 'وليمة تقليدية'] },
      es: { title: 'Vinos y Cultura de Kakheti', region: 'Kakheti', tag: 'Vino', shortDescription: 'Explora la región vinícola más antigua de Georgia, cosecha uvas y aprende la elaboración en qvevri.', highlights: ['Catas privadas en Telavi', 'Paseo por el valle de Alazani', 'Monasterio de Alaverdi', 'Festín tradicional (supra)'] },
      fr: { title: 'Vins et Culture de Kakhétie', region: 'Kakhétie', tag: 'Vin', shortDescription: 'Explorez la plus ancienne région viticole de Géorgie, vendangez et maîtrisez la vinification en qvevri.', highlights: ['Dégustations privées à Télavi', "Promenade dans la vallée de l'Alazani", "Monastère d'Alaverdi", 'Festin géorgien traditionnel'] },
      it: { title: 'Vini e Cultura della Kakheti', region: 'Kakheti', tag: 'Vino', shortDescription: "Esplora la più antica regione vitivinicola della Georgia, vendemmia e impara la vinificazione in qvevri.", highlights: ['Degustazioni private a Telavi', "Passeggiata nella Valle dell'Alazani", 'Monastero di Alaverdi', 'Banchetto tradizionale (supra)'] },
      de: { title: 'Wein & Kultur in Kachetien', region: 'Kachetien', tag: 'Wein', shortDescription: 'Erkunden Sie Georgiens älteste Weinregion, ernten Sie Trauben und erlernen Sie die Qvevri-Weinbereitung.', highlights: ['Private Weinproben in Telawi', 'Spaziergang im Alasani-Tal', 'Kloster Alawerdi', 'Traditionelles Festmahl (Supra)'] },
      zh: { title: '卡赫季葡萄酒与文化', region: '卡赫季', tag: '葡萄酒', shortDescription: '探索格鲁吉亚最古老的葡萄酒产区，在古老葡萄园采摘葡萄，掌握土罐酿酒技艺。', highlights: ['泰拉维私人酒庄品鉴', '阿拉扎尼山谷漫步', '阿拉维尔迪修道院', '传统宴席（苏普拉）'] },
      tr: { title: 'Kakheti Şarap ve Kültür', region: 'Kakheti', tag: 'Şarap', shortDescription: "Gürcistan'ın en eski şarap bölgesini keşfedin, üzüm hasat edin ve qvevri şarabını öğrenin.", highlights: ["Telavi'de Özel Şarap Tadımı", 'Alazani Vadisi Yürüyüşü', 'Alaverdi Manastırı', 'Geleneksel Ziyafet (Supra)'] },
    },
    3: {
      geo: { title: 'ძველი თბილისის ჩაძირვა', region: 'თბილისი', tag: 'კულტურა', shortDescription: 'იარეთ გოგირდის აბანოებში, ფრესკებიანი ეკლესიების გარდა, და ამ ისტორიული ქალაქის სახურავის ტერასებზე.', highlights: ['ნარიყალის ციხის გათენება', 'აბანოთუბანი გოგირდის აბანოები', 'სასტუმრო ღვინის სადილი', 'ვერნისაჟის ხელოსნური ბაზარი'] },
      ru: { title: 'Погружение в Старый Тбилиси', region: 'Тбилиси', tag: 'Культура', shortDescription: 'Прогуляйтесь по серным баням, расписным церквям и крышам этого древнего города-перекрёстка.', highlights: ['Рассвет у крепости Нарикала', 'Серные бани Абанотубани', 'Ужин в духе средневековья', 'Рынок ремёсел Вернисаж'] },
      ar: { title: 'غوص في تبليسي القديمة', region: 'تبليسي', tag: 'ثقافة', shortDescription: 'تجول في أحياء الحمامات الكبريتية والكنائس المزينة بالفسيفساء وشرفات الأسطح في هذه المدينة العريقة.', highlights: ['شروق الشمس من قلعة ناريكالا', 'حمامات أبانوتوباني الكبريتية', 'عشاء في نمط الكاروانسراي', 'سوق فيرنيساج للحرف اليدوية'] },
      es: { title: 'Inmersión en el Casco Antiguo de Tiflis', region: 'Tiflis', tag: 'Cultura', shortDescription: 'Pasea por los distritos de baños de azufre, iglesias con frescos y terrazas en las azoteas de esta antigua ciudad.', highlights: ['Amanecer en la fortaleza Narikala', 'Baños de azufre Abanotubani', 'Cena en la caravanserai', 'Mercado artesanal Vernissage'] },
      fr: { title: 'Immersion dans la Vieille Ville de Tbilissi', region: 'Tbilissi', tag: 'Culture', shortDescription: 'Flânez dans les bains de soufre, les églises ornées de fresques et les terrasses sur les toits de cette cité millénaire.', highlights: ['Lever de soleil sur la forteresse Nariqala', "Bains de soufre d'Abanotubani", 'Dîner dans un caravansérail', 'Marché artisanal Vernissage'] },
      it: { title: 'Immersione nella Città Vecchia di Tbilisi', region: 'Tbilisi', tag: 'Cultura', shortDescription: 'Passeggia tra i bagni di zolfo, le chiese affrescate e le terrazze panoramiche di questa antica città.', highlights: ['Alba alla fortezza Narikala', 'Bagni di zolfo di Abanotubani', 'Cena in stile caravanserraglio', 'Mercato artigianale Vernissage'] },
      de: { title: 'Eintauchen in die Altstadt von Tiflis', region: 'Tiflis', tag: 'Kultur', shortDescription: 'Schlendern Sie durch Schwefelbadbezirke, freskengeschmückte Kirchen und Dachterrassen dieser uralten Kreuzungsstadt.', highlights: ['Sonnenaufgang an der Festung Narikala', 'Abanotubani-Schwefelbäder', 'Abendessen im Karawanserei-Stil', 'Vernissage-Kunsthandwerksmarkt'] },
      zh: { title: '第比利斯老城沉浸体验', region: '第比利斯', tag: '文化', shortDescription: '漫步硫磺浴场区、壁画教堂和这座古老十字路口城市的屋顶露台。', highlights: ['纳里卡拉要塞日出', '阿巴诺图巴尼硫磺浴', '商队旅馆风格晚宴', '维尔尼萨日手工艺品市场'] },
      tr: { title: 'Tiflis Eski Şehir Deneyimi', region: 'Tiflis', tag: 'Kültür', shortDescription: 'Bu kadim kavşak şehrin kükürt hamamı mahallelerinde, fresk bezemelii kiliselerinde ve çatı teraslarında dolaşın.', highlights: ["Narikala Kalesi'nde gün doğumu", 'Abanotubani kükürt hamamları', 'Kervansaray akşam yemeği', 'Vernissage el sanatları pazarı'] },
    },
    4: {
      geo: { title: 'ყაზბეგი და სამხედრო გზა', region: 'ყაზბეგი', tag: 'მთები', shortDescription: 'გაიარეთ ლეგენდარული ქართული სამხედრო გზა გერგეტის სამების ეკლესიამდე, რომელიც ღრუბლებს ზემოთ დგას.', highlights: ['გერგეტის სამების ეკლესიის ლაშქრობა', 'ყაზბეკის მთის ხედი', 'ანანურის ციხე-კომპლექსი', 'გუდაურში სადილი მთებში'] },
      ru: { title: 'Казбеги и Военно-Грузинская дорога', region: 'Казбеги', tag: 'Горы', shortDescription: 'Проедьте по легендарной Военно-Грузинской дороге к церкви Гергети над облаками.', highlights: ['Поход к церкви Гергети', 'Виды на гору Казбек', 'Крепость Ананури', 'Обед в горном Гудаури'] },
      ar: { title: 'قازبيجي والطريق العسكري', region: 'قازبيجي', tag: 'جبال', shortDescription: 'سافر عبر الطريق العسكري الجورجي الأسطوري إلى كنيسة جيرجيتي الثالوث المُحلِّقة فوق السحاب.', highlights: ['رحلة إلى كنيسة جيرجيتي', 'مناظر جبل قازبيك', 'مجمع قلعة أنانوري', 'غداء جبلي في جوداوري'] },
      es: { title: 'Kazbegi y la Carretera Militar', region: 'Kazbegi', tag: 'Montañas', shortDescription: 'Recorre la legendaria Carretera Militar Georgiana hasta la iglesia Gergeti, posada sobre las nubes.', highlights: ['Ascenso a la iglesia Gergeti', 'Vistas al monte Kazbek', 'Fortaleza Ananuri', 'Almuerzo en Gudauri'] },
      fr: { title: 'Kazbegi et la Route Militaire', region: 'Kazbegi', tag: 'Montagnes', shortDescription: "Empruntez la légendaire Route militaire géorgienne jusqu'à l'église Gergeti, perchée au-dessus des nuages.", highlights: ["Randonnée à l'église de Gergeti", 'Vues sur le mont Kazbek', "Forteresse d'Ananouri", 'Déjeuner montagnard à Goudaouri'] },
      it: { title: 'Kazbegi e la Strada Militare', region: 'Kazbegi', tag: 'Montagne', shortDescription: 'Percorri la leggendaria Strada Militare Georgiana fino alla chiesa della Trinità di Gergeti, arroccata sopra le nuvole.', highlights: ['Escursione alla chiesa di Gergeti', 'Vista sul monte Kazbek', 'Fortezza Ananuri', 'Pranzo in montagna a Gudauri'] },
      de: { title: 'Kazbegi und die Heerstraße', region: 'Kazbegi', tag: 'Berge', shortDescription: 'Fahren Sie die legendäre Georgische Heerstraße zur Gergeti-Dreifaltigkeitskirche, die über den Wolken thront.', highlights: ['Wanderung zur Gergeti-Kirche', 'Aussicht auf den Kazbek', 'Festungskomplex Ananuri', 'Bergmittagessen in Gudauri'] },
      zh: { title: '卡兹别基与军事公路', region: '卡兹别基', tag: '山地', shortDescription: '沿传奇格鲁吉亚军事公路驱车，前往悬浮云端的格尔盖提三一教堂。', highlights: ['格尔盖提三一教堂徒步', '卡兹别克山景', '阿纳努里要塞群', '古达乌里山地午餐'] },
      tr: { title: 'Kazbegi ve Askeri Yol', region: 'Kazbegi', tag: 'Dağlar', shortDescription: "Efsanevi Gürcü Askeri Yolu boyunca bulutların üzerindeki Gergeti Kilisesi'ne ulaşın.", highlights: ['Gergeti Kilisesi Yürüyüşü', 'Kazbek Dağı Manzaraları', 'Ananuri Kale Kompleksi', "Gudauri'de Dağ Öğle Yemeği"] },
    },
    5: {
      geo: { title: 'ვარძიის მღვიმის ქალაქი და ბორჯომი', region: 'სამცხე-ჯავახეთი', tag: 'მემკვიდრეობა', shortDescription: 'შეისწავლეთ ვარძიის კლდეში ნაკვეთი მონასტერი, შემდეგ კი განახლდით ლეგენდარული ბორჯომის მინერალურ წყლებში.', highlights: ['ვარძიის მღვიმის ქალაქის შესწავლა', 'ბორჯომის მინერალური წყლის პარკი', 'რაბათის ციხე', 'საფარის მწვანე მონასტერი'] },
      ru: { title: 'Пещерный город Вардзия и Боржоми', region: 'Самцхе-Джавахети', tag: 'Наследие', shortDescription: 'Исследуйте высеченный в скале монастырь Вардзия, а затем отдохните в легендарных боржомских минеральных источниках.', highlights: ['Экскурсия по пещерному городу Вардзия', 'Минеральный парк Боржоми', 'Крепость Рабати', 'Монастырь Сапара'] },
      ar: { title: 'مدينة كهف فارديا وسبا بورجومي', region: 'سامتسخي-جافاخيتي', tag: 'تراث', shortDescription: 'استكشف دير فارديا المنحوت في الصخور ثم أعد نشاطك في ينابيع بورجومي المعدنية.', highlights: ['استكشاف مدينة الكهف فارديا', 'حديقة المياه المعدنية بورجومي', 'قلعة رباتي', 'دير سابارا الأخضر'] },
      es: { title: 'Ciudad Cueva de Vardzia y Borjomi', region: 'Samtskhe-Javakheti', tag: 'Patrimonio', shortDescription: 'Explora el monasterio rupestre de Vardzia y rejuvenece en los legendarios manantiales minerales de Borjomi.', highlights: ['Exploración de Vardzia', 'Parque de aguas minerales de Borjomi', 'Castillo de Rabati', 'Monasterio verde de Sapara'] },
      fr: { title: 'Vardzia et thermes de Borjomi', region: 'Samtskhé-Djavakhéti', tag: 'Patrimoine', shortDescription: 'Explorez le monastère rupestre de Vardzia, puis ressourcez-vous dans les sources minérales de Borjomi.', highlights: ['Exploration de la cité de Vardzia', 'Parc thermal de Borjomi', 'Château de Rabati', 'Monastère vert de Sapara'] },
      it: { title: 'Vardzia e Terme di Borjomi', region: 'Samtskhe-Javakheti', tag: 'Patrimonio', shortDescription: "Esplora il monastero rupestre di Vardzia, poi rigenerati nelle leggendarie sorgenti minerali di Borjomi.", highlights: ['Esplorazione di Vardzia', 'Parco delle acque minerali di Borjomi', 'Castello di Rabati', 'Monastero verde di Sapara'] },
      de: { title: 'Höhlenstadt Wardsia & Borjomi', region: 'Samtsche-Dschawacheti', tag: 'Erbe', shortDescription: 'Erkunden Sie das Höhlenkloster Wardsia und regenerieren Sie sich an den Borjomi-Mineralquellen.', highlights: ['Erkundung der Höhlenstadt Wardsia', 'Borjomi Mineralwasserpark', 'Burg Rabati', 'Grünes Kloster Sapara'] },
      zh: { title: '瓦尔兹亚洞穴城与博尔若米温泉', region: '萨姆茨赫-贾瓦赫季', tag: '文化遗产', shortDescription: '探索岩石中凿成的瓦尔兹亚修道院，然后在传奇博尔若米矿泉中恢复活力。', highlights: ['瓦尔兹亚洞穴城探索', '博尔若米矿泉公园', '拉巴提城堡', '萨帕拉绿色修道院'] },
      tr: { title: 'Vardzia Mağara Şehri ve Borjomi', region: 'Samtskhe-Javakheti', tag: 'Miras', shortDescription: "Kayalara oyulmuş Vardzia manastırını keşfedin, ardından efsanevi Borjomi maden sularında yenilen.", highlights: ['Vardzia Mağara Şehri Keşfi', 'Borjomi Maden Suyu Parkı', 'Rabati Kalesi', 'Sapara Yeşil Manastırı'] },
    },
    6: {
      geo: { title: 'აჭარა შავი ზღვა და მთიანეთი', region: 'აჭარა', tag: 'სანაპირო და მთები', shortDescription: 'ბათუმის პალმის ბულვარიდან ბერძნული ციხე-სიმაგრეებამდე და ველური აჭარული მთის ხეობებამდე.', highlights: ['ბათუმის ძველი ქალაქი და ბულვარი', 'შავ ზღვაზე მზის ჩასვლის კრუიზი', 'გონიო-აფსაროსის რომის ციხე-სიმაგრე', 'მახუნცეთის ჩანჩქერის ლაშქრობა'] },
      ru: { title: 'Аджара: Черноморское побережье и горы', region: 'Аджария', tag: 'Пляж и горы', shortDescription: 'От пальмовых бульваров Батуми до древних греческих крепостей и диких аджарских горных ущелий.', highlights: ['Старый город и бульвар Батуми', 'Закатный круиз по Чёрному морю', 'Римская крепость Гонио-Апсарос', 'Поход к водопаду Махунцети'] },
      ar: { title: 'أدجارا: البحر الأسود والمرتفعات', region: 'أدجارا', tag: 'شاطئ وجبال', shortDescription: 'من شوارع باتومي الزاهية إلى القلاع اليونانية القديمة وأودية أدجارا الجبلية.', highlights: ['المدينة القديمة والكورنيش في باتومي', 'رحلة غروب على البحر الأسود', 'قلعة غونيو-أبساروس الرومانية', 'رحلة إلى شلال ماخونتسيتي'] },
      es: { title: 'Adjara: Mar Negro y Tierras Altas', region: 'Adjara', tag: 'Playa y Montañas', shortDescription: 'De los bulevares de palmeras de Batumi a las fortalezas griegas y los barrancos adjarios.', highlights: ['Casco antiguo y bulevar de Batumi', 'Crucero al atardecer por el Mar Negro', 'Fortaleza de Gonio-Apsaros', 'Senderismo a la cascada Makhuntseti'] },
      fr: { title: 'Adjara: Mer Noire et Hauts Plateaux', region: 'Adjara', tag: 'Plage et Montagnes', shortDescription: "Des boulevards de Batoumi aux forteresses grecques antiques et aux gorges sauvages d'Adjarie.", highlights: ['Vieille ville et boulevard de Batoumi', 'Croisière au coucher du soleil sur la Mer Noire', 'Forteresse de Gonio-Apsaros', 'Randonnée à la cascade de Makhounseti'] },
      it: { title: 'Adjara: Mar Nero e Altopiani', region: 'Adjara', tag: 'Spiaggia e Montagne', shortDescription: 'Dai boulevard alberati di Batumi alle antiche fortezze greche e alle selvagge gole agiare.', highlights: ['Città vecchia e lungomare di Batumi', 'Crociera al tramonto sul Mar Nero', 'Fortezza di Gonio-Apsaros', 'Escursione alla cascata Makhuntseti'] },
      de: { title: 'Adscharien: Schwarzes Meer und Hochland', region: 'Adscharien', tag: 'Strand & Berge', shortDescription: 'Von Batumis palmengesäumten Boulevards bis zu antiken Festungen und wilden Bergschluchten.', highlights: ['Batumi Altstadt & Boulevard', 'Sonnenuntergangs-Kreuzfahrt auf dem Schwarzen Meer', 'Festung Gonio-Apsaros', 'Wanderung zum Machunseti-Wasserfall'] },
      zh: { title: '阿扎尔：黑海与高地', region: '阿扎尔', tag: '海滩与山地', shortDescription: '从巴统棕榈大道到古希腊要塞和野性阿扎尔山地峡谷。', highlights: ['巴统老城与大道', '黑海日落游船', '戈尼奥-阿普萨罗斯罗马要塞', '马库恩采蒂瀑布徒步'] },
      tr: { title: 'Acara: Karadeniz ve Yaylalar', region: 'Acara', tag: 'Plaj ve Dağlar', shortDescription: "Batum'un palmiye kaplı bulvarlarından antik Yunan kalelerine ve vahşi Acara dağ vadilerine.", highlights: ["Batum Eski Şehri ve Bulvarı", 'Karadeniz Gün Batımı Turu', 'Gonio-Apsaros Roma Kalesi', 'Makhunseti Şelalesi Yürüyüşü'] },
    },
    7: {
      geo: { title: 'იმერეთის მღვიმეები და მონასტრები', region: 'იმერეთი', tag: 'კულტურა', shortDescription: 'ბრილიანტივით ბრწყინვალე მღვიმეები, შუა საუკუნეების იუნესკოს მონასტრები და დინოზავრის კვალი საქართველოს გულში.', highlights: ['პრომეთეს მღვიმის ნავარდობა', 'გელათის მონასტერი (იუნესკო)', 'საჟარბია-დინოზავრების ნაკრძალი', 'ქუთაისის ძველი ქალაქი'] },
      ru: { title: 'Пещеры и монастыри Имерети', region: 'Имерети', tag: 'Культура', shortDescription: 'Сверкающие пещеры, средневековые монастыри ЮНЕСКО и следы динозавров в сердце Грузии.', highlights: ['Лодочная экскурсия по пещере Прометея', 'Монастырь Гелати (ЮНЕСКО)', 'Заповедник Сатаплия с динозаврами', 'Прогулка по старому Кутаиси'] },
      ar: { title: 'كهوف وأديرة إيميريتي', region: 'إيميريتي', tag: 'ثقافة', shortDescription: 'كهوف متلألئة وأديرة يونسكو القروسطية وبصمات الديناصورات في قلب جورجيا.', highlights: ['رحلة بالقارب في كهف بروميثيوس', 'دير غيلاتي (يونسكو)', 'محمية الديناصورات ساتابليا', 'جولة في مدينة كوتايسي القديمة'] },
      es: { title: 'Cuevas y Monasterios de Imereti', region: 'Imereti', tag: 'Cultura', shortDescription: 'Cuevas resplandecientes, monasterios medievales UNESCO y huellas de dinosaurios en el corazón de Georgia.', highlights: ['Paseo en barca por la Cueva Prometeo', 'Monasterio de Gelati (UNESCO)', 'Reserva de dinosaurios de Sataplia', 'Paseo por el casco antiguo de Kutaisi'] },
      fr: { title: "Grottes et Monastères d'Iméréthie", region: 'Iméréthie', tag: 'Culture', shortDescription: "Grottes scintillantes, monastères médiévaux (UNESCO) et empreintes de dinosaures au cœur de la Géorgie.", highlights: ["Excursion en barque dans la grotte Prométhée", 'Monastère de Gélati (UNESCO)', 'Réserve de dinosaures de Sataplia', 'Promenade dans la vieille ville de Koutaïssi'] },
      it: { title: "Grotte e Monasteri dell'Imereti", region: 'Imereti', tag: 'Cultura', shortDescription: 'Grotte scintillanti, monasteri medievali UNESCO e impronte di dinosauri nel cuore della Georgia.', highlights: ['Gita in barca nella Grotta Prometeo', 'Monastero di Gelati (UNESCO)', 'Riserva dei dinosauri di Sataplia', 'Passeggiata nella città vecchia di Kutaisi'] },
      de: { title: 'Höhlen und Klöster von Imeretien', region: 'Imeretien', tag: 'Kultur', shortDescription: 'Glitzernde Höhlen, mittelalterliche UNESCO-Klöster und Dinosaurierspuren im Herzen Georgiens.', highlights: ['Bootsfahrt in der Prometheus-Höhle', 'Kloster Gelati (UNESCO)', 'Dinosaurierreservat Sataplia', 'Spaziergang durch die Altstadt von Kutaissi'] },
      zh: { title: '伊梅列季洞穴与修道院', region: '伊梅列季', tag: '文化', shortDescription: '闪闪发光的洞穴、中世纪联合国教科文组织修道院和格鲁吉亚腹地的恐龙足迹。', highlights: ['普罗米修斯洞穴游船', '格拉提修道院（联合国教科文组织）', '萨塔普利亚恐龙保护区', '库塔伊西老城漫步'] },
      tr: { title: 'İmereti Mağaraları ve Manastırları', region: 'İmereti', tag: 'Kültür', shortDescription: 'Pırıl pırıl mağaralar, ortaçağdan kalma UNESCO manastırları ve Gürcistan kalbi dinozor ayak izleri.', highlights: ['Prometheus Mağarası Tekne Turu', 'Gelati Manastırı (UNESCO)', 'Sataplia Dinozor Rezervi', 'Kutaisi Eski Şehir Gezisi'] },
    },
    8: {
      geo: { title: 'სამეგრელო - უძველესი კოლხეთი', region: 'სამეგრელო', tag: 'მემკვიდრეობა', shortDescription: 'ნიჩბოსნობა ზურმუხტ კანიონის აუზებში, უკანასკნელი მეგრელი თავადების სასახლის შესწავლა და საქართველოს ყველაზე ცხარე სამზარეულო.', highlights: ['მარტვილის კანიონი – კაიაკი', 'დადიანის სასახლის მუზეუმი', 'ნოქალაქევის უძველესი ციხე-სიმაგრე', 'მეგრული სუფრა ადგილობრივ ოჯახთან'] },
      ru: { title: 'Самегрело — древняя Колхида', region: 'Самегрело', tag: 'Наследие', shortDescription: 'Каяк в изумрудных каньонах, дворец последних мегрельских князей и острейшая кухня Грузии.', highlights: ['Каяк в каньоне Мартвили', 'Музей во дворце Дадиани', 'Древняя крепость Нокалакеви', 'Мегрельское застолье с местной семьёй'] },
      ar: { title: 'ساميغريلو - كولخيس القديمة', region: 'ساميغريلو', tag: 'تراث', shortDescription: 'تجديف في برك الوادي الزمردية واستكشاف قصر الأمراء الميغريليين الأخيرين وتذوق أحر المأكولات الجورجية.', highlights: ['كاياك في وادي مارتفيلي', 'متحف قصر داديانيش', 'قلعة نوكالاكيفي القديمة', 'مأدبة ميغريلية مع عائلة محلية'] },
      es: { title: 'Samegrelo: Antigua Cólquide', region: 'Samegrelo', tag: 'Patrimonio', shortDescription: 'Navega por las piscinas de esmeralda del cañón, explora el palacio de los últimos príncipes megrelios y saborea la cocina más picante de Georgia.', highlights: ['Kayak en el Cañón Martvili', 'Museo del Palacio Dadiani', 'Antigua fortaleza de Nokalakevi', 'Festín megrelo con familia local'] },
      fr: { title: 'Samégrélo: Colchide antique', region: 'Samégrélo', tag: 'Patrimoine', shortDescription: "Pagayez dans les bassins d'émeraude du canyon, explorez le palais des derniers princes mingréliens et goûtez la cuisine la plus épicée de Géorgie.", highlights: ['Kayak dans le Canyon de Martvili', 'Musée du Palais Dadiani', 'Ancienne forteresse de Nokalakevi', 'Festin mingrélien avec une famille locale'] },
      it: { title: 'Samegrelo: Antica Colchide', region: 'Samegrelo', tag: 'Patrimonio', shortDescription: "Pagaia nelle piscine di smeraldo del canyon, esplora il palazzo degli ultimi principi megreliani e assapora la cucina più piccante della Georgia.", highlights: ['Kayak nel Canyon di Martvili', 'Museo del Palazzo Dadiani', 'Antica fortezza di Nokalakevi', 'Banchetto megrelo con famiglia locale'] },
      de: { title: 'Samegrelo: Das antike Kolchis', region: 'Samegrelo', tag: 'Erbe', shortDescription: 'Paddeln Sie durch smaragdgrüne Schluchtseen, erkunden Sie den Palast der letzten minglersichen Fürsten und kosten Sie Georgiens schärfste Küche.', highlights: ['Kajak im Martvili-Canyon', 'Museum im Dadiani-Palast', 'Alte Festung Nokalakewi', 'Mingrelisches Festmahl mit einer Einheimischenfamilie'] },
      zh: { title: '萨美格列罗：古代科尔基斯', region: '萨美格列罗', tag: '文化遗产', shortDescription: '在翡翠峡谷池中划桨，探索最后梅格列里亚王子的宫殿，品尝格鲁吉亚最辛辣的美食。', highlights: ['马尔特维里峡谷皮划艇', '达迪阿尼宫殿博物馆', '诺卡拉科维古代要塞', '梅格列利亚家庭宴席'] },
      tr: { title: 'Samegrelo: Antik Kolkhis', region: 'Samegrelo', tag: 'Miras', shortDescription: 'Zümrüt kanyon havuzlarında kürek çekin, son Megreli prenslerin sarayını keşfedin ve Gürcistan en baharatlı mutfağını tadın.', highlights: ['Martvili Kanyonu Kano', 'Dadiani Sarayı Müzesi', 'Nokalakevi Antik Kalesi', 'Yerel Aile ile Megreli Ziyafeti'] },
    },
    9: {
      geo: { title: 'ქვემო ქართლის კანიონის თავგადასავალი', region: 'ქვემო ქართლი', tag: 'თავგადასავალი', shortDescription: 'იდგათ საქართველოს მინის სართულიან ხიდზე დაშბაშის კანიონის თავზე, შეისწავლეთ შუა საუკუნეების ციხეები.', highlights: ['დაშბაშის კანიონის მინის ხიდი', 'ქვეშის ციხის ლაშქრობა', 'რუსთავის ქალაქი', 'მრავალეთნიკური სოფელი'] },
      ru: { title: 'Каньонное приключение Квемо-Картли', region: 'Квемо-Картли', tag: 'Приключение', shortDescription: 'Встаньте на стеклянный мост над каньоном Дашбаши, исследуйте средневековые крепости и откройте для себя многонациональный юг.', highlights: ['Стеклянный мост над каньоном Дашбаши', 'Поход к крепости Квеши', 'Экскурсия по Рустави', 'Посещение многонационального села'] },
      ar: { title: 'مغامرة كانيون كفيمو كارتلي', region: 'كفيمو كارتلي', tag: 'مغامرة', shortDescription: 'قف على جسر جورجيا الزجاجي فوق كانيون داشباشي واستكشف القلاع القروسطية.', highlights: ['جسر داشباشي الزجاجي', 'رحلة قلعة كفيشي', 'جولة مدينة روستافي', 'زيارة قرية متعددة الأعراق'] },
      es: { title: 'Aventura en el Cañón de Kvemo Kartli', region: 'Kvemo Kartli', tag: 'Aventura', shortDescription: 'Párate sobre el puente de cristal de Georgia sobre el Cañón Dashbashi, explora fortalezas medievales y descubre el sur multiétnico.', highlights: ['Puente de cristal sobre el cañón Dashbashi', 'Senderismo a la fortaleza Kveshi', 'Visita a Rustavi', 'Visita a pueblo multiétnico'] },
      fr: { title: 'Aventure dans le Canyon de Kvemo Kartli', region: 'Kvemo Kartli', tag: 'Aventure', shortDescription: 'Tenez-vous sur le pont en verre de Géorgie au-dessus du Canyon Dashbashi, explorez des forteresses médiévales et découvrez le sud multiethnique.', highlights: ['Pont en verre du canyon Dashbashi', 'Randonnée à la forteresse Kveshi', 'Visite de Roustavi', 'Visite d\'un village multiethnique'] },
      it: { title: 'Avventura nel Canyon di Kvemo Kartli', region: 'Kvemo Kartli', tag: 'Avventura', shortDescription: 'Fermati sul ponte di vetro georgiano sul Canyon Dashbashi, esplora fortezze medievali e scopri il sud multietnico.', highlights: ['Ponte di vetro sul Canyon Dashbashi', 'Escursione alla fortezza Kveshi', 'Tour di Rustavi', 'Visita al villaggio multietnico'] },
      de: { title: 'Canyon-Abenteuer in Quemo Kartli', region: 'Quemo Kartli', tag: 'Abenteuer', shortDescription: 'Stehen Sie auf Georgiens Glasbrücke über dem Daschbaschi-Canyon, erkunden Sie mittelalterliche Festungen und entdecken Sie den multiethnischen Süden.', highlights: ['Glasbrücke über den Daschbaschi-Canyon', 'Wanderung zur Festung Kweschi', 'Stadtrundfahrt Rustawi', 'Besuch eines multiethnischen Dorfes'] },
      zh: { title: '夸莫卡尔特利峡谷探险', region: '夸莫卡尔特利', tag: '探险', shortDescription: '站在格鲁吉亚达什巴希峡谷上方的玻璃地板桥，探索中世纪要塞，发现多民族南部。', highlights: ['达什巴希峡谷玻璃桥', '夸什要塞徒步', '鲁斯塔维城市游', '多民族村庄参观'] },
      tr: { title: 'Kvemo Kartli Kanyon Macerası', region: 'Kvemo Kartli', tag: 'Macera', shortDescription: "Gürcistan'ın Daşbaşı Kanyonu üzerindeki cam tabanlı köprüde durun, ortaçağ kalelerini keşfedin.", highlights: ['Daşbaşı Kanyonu Cam Köprüsü', 'Kveşi Kalesi Yürüyüşü', 'Rustavi Şehir Turu', 'Çok Etnikli Köy Ziyareti'] },
    },
    10: {
      geo: { title: 'შიდა ქართლის ისტორია და ლეგენდები', region: 'შიდა ქართლი', tag: 'მემკვიდრეობა', shortDescription: 'გაიარეთ 3,000 წლის მღვიმის ქალაქში, ავიდეთ შუა საუკუნეების ციხეზე და შეისწავლეთ სტალინის სამშობლო.', highlights: ['უფლისციხის მღვიმის ქალაქი', 'გორის ციხის პანორამა', 'სტალინის მუზეუმი და პირადი ვაგონი', 'სურამის ციხის შეზაფხული'] },
      ru: { title: 'История и легенды Шида-Картли', region: 'Шида-Картли', tag: 'Наследие', shortDescription: 'Прогуляйтесь по 3000-летнему пещерному городу, поднимитесь в средневековую крепость и изучите спорное наследие родины Сталина.', highlights: ['Пещерный город Уплисцихе', 'Панорама крепости Гори', 'Музей Сталина и личный вагон', 'Закат у крепости Сурами'] },
      ar: { title: 'تاريخ وأساطير شيدا كارتلي', region: 'شيدا كارتلي', tag: 'تراث', shortDescription: 'تجول في مدينة كهف عمرها 3,000 عام وتسلق قلعة قروسطية وتعرف على إرث مسقط رأس ستالين.', highlights: ['مدينة كهف أوبليستسيخي', 'بانوراما قلعة غوري', 'متحف ستالين وعربة القطار الشخصية', 'غروب قلعة سورامي'] },
      es: { title: 'Historia y Leyendas de Shida Kartli', region: 'Shida Kartli', tag: 'Patrimonio', shortDescription: 'Pasea por una ciudad rupestre de 3.000 años, sube a una fortaleza medieval y explora el legado controversial del lugar de nacimiento de Stalin.', highlights: ['Ciudad rupestre de Uplistsikhe', 'Panorama de la fortaleza de Gori', 'Museo Stalin y vagón personal', 'Atardecer en la fortaleza Surami'] },
      fr: { title: 'Histoire et Légendes de Chida Kartli', region: 'Chida Kartli', tag: 'Patrimoine', shortDescription: "Parcourez une cité troglodyte de 3 000 ans, grimpez dans une forteresse médiévale et explorez l'héritage controversé du lieu de naissance de Staline.", highlights: ["Cité troglodyte d'Ouplistsikhe", 'Panorama de la forteresse de Gori', 'Musée Staline et wagon personnel', 'Coucher de soleil à la forteresse de Souraimi'] },
      it: { title: 'Storia e Leggende di Shida Kartli', region: 'Shida Kartli', tag: 'Patrimonio', shortDescription: "Cammina attraverso una città rupestre di 3.000 anni, scala una fortezza medievale ed esplora la controversa eredità del luogo di nascita di Stalin.", highlights: ["Città rupestre di Uplistsikhe", 'Panorama della fortezza di Gori', 'Museo Stalin e vagone personale', 'Tramonto alla fortezza di Surami'] },
      de: { title: 'Geschichte und Legenden von Schida Kartli', region: 'Schida Kartli', tag: 'Erbe', shortDescription: 'Wandeln Sie durch eine 3.000 Jahre alte Höhlenstadt, besteigen Sie eine mittelalterliche Burg und erkunden Sie das kontroverse Erbe von Stalins Geburtsort.', highlights: ['Höhlenstadt Upliziche', 'Panorama der Festung Gori', 'Stalin-Museum und persönlicher Waggon', 'Sonnenuntergang an der Festung Surami'] },
      zh: { title: '希达卡尔特利历史与传说', region: '希达卡尔特利', tag: '文化遗产', shortDescription: '漫步三千年历史的洞穴城市，攀登中世纪山顶要塞，探索斯大林出生地的历史遗产。', highlights: ['乌普利斯齐赫洞穴城', '哥里要塞全景', '斯大林博物馆与专属火车车厢', '苏拉米要塞日落'] },
      tr: { title: 'Shida Kartli Tarihi ve Efsaneleri', region: 'Shida Kartli', tag: 'Miras', shortDescription: "3.000 yıllık mağara şehrinde yürüyün, ortaçağ tepekalesine tırmanın ve Stalin'in doğduğu yerin tartışmalı mirasını keşfedin.", highlights: ['Uplistsikhe Mağara Şehri', 'Gori Kalesi Panoraması', "Stalin Müzesi ve Özel Vagonu", 'Surami Kalesi Gün Batımı'] },
    },
  };

  private tours: Tour[] = [
    {
      id: 1,
      title: 'Svaneti Mountain Expedition',
      region: 'Svaneti',
      duration: '7 Days',
      // price: 1890,
      image: 'assets/imgs/regions/svaneti/mestia-3.jpg',
      images: [
        'assets/imgs/regions/svaneti/mestia-3.jpg',
        'assets/imgs/regions/svaneti/mestia.jpg',
        'assets/imgs/regions/svaneti/mestia-cross.jpg',
        'assets/imgs/regions/svaneti/ushba.jpeg',
        'assets/imgs/regions/svaneti/svaneti-night.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/svaneti/cuisine/tashmijabi.jpg',
          name: 'Tashmijabi',
          nameGeo: 'თაშმიჯაბი',
          nameRu: 'Ташмиджаби',
          desc: 'A rich Svan dish of mashed potatoes blended with melted sulguni cheese, served piping hot — hearty fuel for mountain trekkers.',
          descGeo: 'სვანური კარტოფილის პიურე, გალღობილ სულგუნის ყველთან ერთად — მთის მლაშქველების ძლიერი საკვები.',
          descRu: 'Сытное сванское блюдо: картофельное пюре с расплавленным сулугуни — идеальная еда для горных походов.',
        },
        {
          image: 'assets/imgs/regions/svaneti/cuisine/svanuri-kubdari.webp',
          name: 'Kubdari',
          nameGeo: 'კუბდარი',
          nameRu: 'Кубдари',
          desc: 'The Svan answer to khachapuri: a thick, hand-pressed bread stuffed with spiced minced pork and onions, baked on a stone.',
          descGeo: 'სვანური პასუხი ხაჭაპურზე: სქელი, ხელით დაჭყლეტილი პური, სანელებლიანი ღორის ხორცით და ხახვით, ქვაზე გამომცხვარი.',
          descRu: 'Сванский ответ хачапури: толстый хлеб с пряной свининой и луком, испечённый на камне.',
        },
        {
          image: 'assets/imgs/regions/svaneti/cuisine/chvishtari.jpg',
          name: 'Chvishtari',
          nameGeo: 'ჭვიშტარი',
          nameRu: 'Чвиштари',
          desc: 'Golden cornbread studded with fresh sulguni cheese, pan-fried until crispy outside and soft within — a staple across the Svan highlands.',
          descGeo: 'ოქროსფერი სიმინდის პური სულგუნის ყველით, შეწვილი ტაფაზე — სვანეთის მთიანეთის ტრადიციული კერძი.',
          descRu: 'Золотистый кукурузный хлеб со свежим сулугуни — снаружи хрустящий, внутри мягкий.',
        },
      ],
      reviews: [
        {
          name: 'Giorgi Beridze',
          country: 'Georgia',
          rating: 5,
          date: 'March 2025',
          comment: 'Unforgettable journey to the roof of the Caucasus. The guide knew every path and story behind each tower. Supra dinner with the Svan family was the highlight of my entire year.',
          commentGeo: 'დაუვიწყარი მოგზაურობა კავკასიონის სახურავამდე. გიდი ყველა ბილიკს და კოშკის ისტორიას იცნობდა. სვანური ოჯახის სუფრა ჩემი მთელი წლის საუკეთესო მომენტი გახდა.',
          commentRu: 'Незабываемое путешествие на крышу Кавказа. Гид знал каждую тропу и историю каждой башни. Ужин с семьёй в Сванетии стал главным впечатлением года.',
          initials: 'GB',
        },
        {
          name: 'Sophie Müller',
          country: 'Germany',
          rating: 5,
          date: 'July 2024',
          comment: 'I have hiked in the Alps and the Dolomites, but Svaneti had a rawness and authenticity I had never experienced. The vehicle was immaculate — critical for those mountain roads.',
          commentGeo: 'ვიაროლე ალპებში და დოლომიტებში, მაგრამ სვანეთს ჰქონდა სიახლე, რომელიც ვერსად შევხვდი. მანქანა ბრწყინვალედ იყო, რაც ძალიან მნიშვნელოვანია მთის გზებისთვის.',
          commentRu: 'Я ходила в Альпы и Доломиты, но Сванетия поразила меня своей первобытной красотой. Автомобиль был безупречным — это важно на горных дорогах.',
          initials: 'SM',
        },
        {
          name: 'Mariam Kvaratskhelia',
          country: 'Georgia',
          rating: 5,
          date: 'September 2024',
          comment: 'Perfectly organized. Every hotel, every meal was carefully chosen. I came for the mountains and left with a second family in Ushguli.',
          commentGeo: 'სრულყოფილად ორგანიზებული. ყველა სასტუმრო, ყოველი კვება ყურადღებით იყო შერჩეული. მთებში მოვედი და უშგულში მეორე ოჯახი დავიტოვე.',
          commentRu: 'Всё было безупречно организовано. Каждый отель, каждый ужин — тщательно подобраны. Приехал за горами, уехал с семьёй в Ушгули.',
          initials: 'MK',
        },
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
      // price: 980,
      image: 'assets/imgs/regions/kakheti/sighnaghi.jpg',
      images: [
        'assets/imgs/regions/kakheti/sighnaghi.jpg',
        'assets/imgs/regions/kakheti/davit-gareja.jpg',
        'assets/imgs/regions/kakheti/nekresi.jpg',
        'assets/imgs/regions/kakheti/gurjaani-kvelatsminda.jpg',
        'assets/imgs/regions/kakheti/kvareli.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/kakheti/cuisine/kakhuri-wine.jpg',
          name: 'Kakhetian Amber Wine',
          nameGeo: 'კახური ოქროს ღვინო',
          nameRu: 'Кахетинское янтарное вино',
          desc: 'Fermented on the skins in ancient clay qvevri buried underground, this amber wine is Georgia\'s 8,000-year-old gift to the world — complex, tannic, and utterly unique.',
          descGeo: 'მიწაში ჩამარხულ ქვევრებში კანზე დაბროდებული, ეს ოქროსფერი ღვინო საქართველოს 8,000-წლიანი საჩუქარია მსოფლიოსთვის — რთული, ტანინური და შეუდარებლად უნიკალური.',
          descRu: 'Ферментированное на кожице в древних глиняных квеври, это янтарное вино — 8000-летний подарок Грузии миру: сложное, танинное и абсолютно неповторимое.',
        },
        {
          image: 'assets/imgs/regions/kakheti/cuisine/kakhuri-mtsvadi.jpg',
          name: 'Kakhuri Mtsvadi',
          nameGeo: 'კახური მწვადი',
          nameRu: 'Кахетинский мцвади',
          desc: 'Vine-skewered pork or lamb roasted over glowing embers of grape vine cuttings. The vine smoke gives the meat a smoky sweetness unlike any charcoal grill.',
          descGeo: 'ვაზის ყლორტებზე ნასროლი ღორის ან ბატკნის ხორცი, მოშუშული ვაზის ნახშირებზე. ვაზის კვამლი ხორცს ანიჭებს კვამლს და სიტკბოს.',
          descRu: 'Свинина или баранина на вертеле из виноградной лозы над горящими углями. Дым лозы придаёт мясу особую дымчатую сладость.',
        },
        {
          image: 'assets/imgs/regions/kakheti/cuisine/kakhuri-sweets.webp',
          name: 'Churchkhela',
          nameGeo: 'ჩურჩხელა',
          nameRu: 'Чурчхела',
          desc: 'Thread-strung walnuts dipped repeatedly in thickened grape must until a smooth, candied shell forms. Kakheti\'s answer to the chocolate bar — called "Georgian Snickers".',
          descGeo: 'ძაფზე გაყრილი თხილი, განმეორებით ჩაყვინთული სქელ ყურძნის ტკბილში, სანამ გლუვი, შაქრიანი გარსი არ შეიქმნება — ქართული შოკოლადი.',
          descRu: 'Нанизанные на нить грецкие орехи, обмакнутые в сгущённый виноградный сок до образования гладкой карамельной оболочки — «Грузинский Сникерс».',
        },
      ],
      reviews: [
        {
          name: 'Luka Chikovani',
          country: 'Georgia',
          rating: 5,
          date: 'October 2024',
          comment: 'As a Georgian I thought I knew Kakheti well. This tour showed me hidden monasteries and family wineries I had never discovered. The qvevri workshop was hands-on and wonderful.',
          commentGeo: 'როგორც ქართველი, ვფიქრობდი, კახეთი კარგად ვიცი. ეს ტური მიჩვენა ფარული მონასტრები და ოჯახური მარნები, რომელიც არასდროს აღმომეჩინა. ქვევრის სახელოსნო ბრწყინვალე იყო.',
          commentRu: 'Как грузин, я думал, что хорошо знаю Кахетию. Этот тур открыл мне скрытые монастыри и семейные винодельни. Мастер-класс по квеври был потрясающим.',
          initials: 'LC',
        },
        {
          name: 'Elena Volkov',
          country: 'Russia',
          rating: 5,
          date: 'April 2024',
          comment: 'Five wineries in four days — I needed an extra suitcase for the bottles I bought! The driver handled mountain roads with total confidence and humour.',
          commentGeo: 'ხუთი მარანი ოთხ დღეში — მომჭირდა დამატებითი ჩანთა ბოთლებისთვის! მძღოლი მთის გზებს სრული ნდობითა და იუმორით უმკლავდებოდა.',
          commentRu: 'Пять виноделен за четыре дня — пришлось взять лишний чемодан для бутылок! Водитель уверенно и с юмором преодолевал горные дороги.',
          initials: 'EV',
        },
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
      // price: 650,
      image: 'assets/imgs/regions/tbilisi/old-tbilisi.png',
      images: [
        'assets/imgs/regions/tbilisi/old-tbilisi.png',
        'assets/imgs/regions/tbilisi/mtatsminda.jpg',
        'assets/imgs/regions/tbilisi/sameba.jpg',
        'assets/imgs/regions/tbilisi/tbilisi-night.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/tbilisi/cuisine/georgian-bread-and-salt.jpg',
          name: 'Puri & Guda',
          nameGeo: 'პური და გუდა',
          nameRu: 'Пури и Гуда',
          desc: 'Georgian hospitality begins with bread and salt. Shoti bread from a tonè oven paired with aged guda sheepskin cheese is the timeless welcome every guest receives.',
          descGeo: 'ქართული სტუმართმოყვარეობა პური და მარილით იწყება. ტონეს შოთი პური დავნებული გუდა ცხვრის ყველთან ერთად — ტრადიციული მისალმება ყველა სტუმრისთვის.',
          descRu: 'Грузинское гостеприимство начинается с хлеба и соли. Хлеб шоти из тонэ с выдержанным сыром гуда из овечьей кожи — вечное приветствие для гостей.',
        },
      ],
      reviews: [
        {
          name: 'Nino Tabatadze',
          country: 'Georgia',
          rating: 5,
          date: 'January 2025',
          comment: 'I live in Tbilisi and still learned so much on this tour. The guide took us to caravanserai wine caves and rooftop viewpoints tourists never find alone.',
          commentGeo: 'თბილისში ვცხოვრობ და მაინც ბევრი ვისწავლე ამ ტურში. გიდმა სასტუმროს ღვინის მღვიმეებსა და სახურავის ბაქნებზე მიგვიყვანა, რასაც ტურისტები მარტო ვერ იპოვიდნენ.',
          commentRu: 'Я живу в Тбилиси, но узнала столько нового. Гид отвел нас в винные погреба в стиле каравансарая и на смотровые площадки на крышах, которые туристы сами не найдут.',
          initials: 'NT',
        },
        {
          name: 'Ahmed Al-Rashidi',
          country: 'UAE',
          rating: 5,
          date: 'February 2025',
          comment: 'Tbilisi exceeded every expectation. The vehicle was spotless, the driver always punctual, and the city felt like stepping into a living museum. I am already planning my return.',
          commentGeo: 'თბილისმა ყველა მოლოდინს გადააჭარბა. მანქანა სუფთა იყო, მძღოლი ყოველთვის პუნქტუალური, და ქალაქი ცოცხალი მუზეუმი ეგონა. უკვე ვგეგმავ დაბრუნებას.',
          commentRu: 'Тбилиси превзошёл все ожидания. Автомобиль безупречен, водитель всегда пунктуален, и город ощущается как живой музей. Уже планирую вернуться.',
          initials: 'AR',
        },
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
      // price: 720,
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
      cuisineItems: [
        {
          image: 'assets/imgs/regions/mtskheta-mtianeti/cuisine/khinkali.jpg',
          name: 'Khinkali',
          nameGeo: 'ხინკალი',
          nameRu: 'Хинкали',
          desc: 'Georgia\'s iconic dumpling — a pleated parcel of seasoned lamb or beef broth. Hold by the knot, bite a small hole, sip the hot broth first, then eat. Never use a fork.',
          descGeo: 'საქართველოს საბრენდო პელმენი — სანელებლიანი ბატკნის ან საქონლის ხორციანი ჯვარ-ნაოჭები. კვანძით დაიჭირეთ, პატარა ხვრელი ამოჩიჩქნეთ, ჯერ ბულიონი დალიეთ, შემდეგ ჭამეთ. ჩანგალი გამოსადეგი არ არის.',
          descRu: 'Культовые грузинские пельмени — пакетик с приправленным бульоном из баранины или говядины. Держите за хвостик, откусите дырочку, сначала выпейте бульон. Вилку не используйте.',
        },
        {
          image: 'assets/imgs/regions/mtskheta-mtianeti/cuisine/dambal-khacho.jpg',
          name: 'Dambal Khacho',
          nameGeo: 'დამბალ ხაჭო',
          nameRu: 'Дамбал-хачо',
          desc: 'A pungent aged curd cheese from the Mtskheta-Mtianeti highlands, hand-rolled into balls and cured for months. Bold, funky, and deeply local — the mountain blue cheese of Georgia.',
          descGeo: 'მცხეთა-მთიანეთის მთიანეთიდან მომდინარე ბოროტი, ხნიერი ყველი, ხელით ბურთებად გაკეთებული და თვეობით დამარინადებული — მთის ლურჯი ყველი.',
          descRu: 'Острый выдержанный творожный сыр из Мцхета-Мтианети, скатанный вручную и созревающий месяцами — горный аналог синего сыра в Грузии.',
        },
      ],
      reviews: [
        {
          name: 'Tamar Javakhishvili',
          country: 'Georgia',
          rating: 5,
          date: 'December 2024',
          comment: 'The driver navigated the military highway in winter conditions with complete calm and expertise. Gergeti in the snow was a spiritual experience unlike anything I\'ve known.',
          commentGeo: 'მძღოლმა ზამთრის პირობებში სამხედრო გზა სრული სიმშვიდით და გამოცდილებით გაიარა. გერგეთი თოვლში სულიერი გამოცდილება იყო, ისეთი, როგორიც სხვა ადგილას არ გამიჩნდებოდა.',
          commentRu: 'Водитель уверенно провёл нас по военной дороге в зимних условиях. Гергети в снегу — это духовный опыт, которого я нигде больше не встречала.',
          initials: 'TJ',
        },
        {
          name: 'James Caldwell',
          country: 'United Kingdom',
          rating: 5,
          date: 'August 2024',
          comment: 'Gergeti Church at sunrise with Kazbek behind it is one of the most dramatic sights on earth. Vardotour got us there before the tourist crowds. Worth every penny.',
          commentGeo: 'გერგეთის ეკლესია მზის ამოსვლის დროს ყაზბეკის ფონზე — ერთ-ერთი ყველაზე დრამატული ხედია დედამიწაზე. Vardotour-მა ტურისტებამდე ადრე მიგვიყვანა. ღირდა.',
          commentRu: 'Церковь Гергети на рассвете с видом на Казбек — одно из самых захватывающих зрелищ на земле. Vardotour доставил нас туда до появления туристов. Оно того стоит.',
          initials: 'JC',
        },
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
      // price: 890,
      image: 'assets/imgs/regions/samtskhe-javakheti/vardzia.jpg',
      images: [
        'assets/imgs/regions/samtskhe-javakheti/vardzia.jpg',
        'assets/imgs/regions/samtskhe-javakheti/borjomi-park.jpg',
        'assets/imgs/regions/samtskhe-javakheti/rabati.jpg',
        'assets/imgs/regions/samtskhe-javakheti/sapara-monastery.jpg',
        'assets/imgs/regions/samtskhe-javakheti/matskhane-monastery.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/samtskhe-javakheti/cuisine/meskhi-khachapuri.png',
          name: 'Meskhi Khachapuri',
          nameGeo: 'მესხური ხაჭაპური',
          nameRu: 'Месхийский хачапури',
          desc: 'The Samtskhe-Javakheti style khachapuri is thicker and heavier than other varieties, filled with locally-produced imeretian cheese and baked slowly for maximum crust depth.',
          descGeo: 'სამცხე-ჯავახეთის სტილის ხაჭაპური სხვა სახეობებზე სქელი და მასივია, ადგილობრივი იმერულ ყველით სავსე, და ნელა გამომცხვარი მაქსიმალური ქრუსტისთვის.',
          descRu: 'Самцхе-джавахетский хачапури толще и плотнее других, наполнен местным имеретинским сыром и выпекается медленно для максимальной глубины корочки.',
        },
        {
          image: 'assets/imgs/regions/samtskhe-javakheti/cuisine/tenili-cheese.jpg',
          name: 'Tenili Cheese',
          nameGeo: 'ტენილი ყველი',
          nameRu: 'Сыр тенили',
          desc: 'An extraordinary strand-pulled cheese unique to Samtskhe, stretched by hand into silky threads and piled into a cloud-like mound. Produced only in summer from full-fat cow milk.',
          descGeo: 'განსაკუთრებული ძაფი-გაჭიმული ყველი, სამცხისთვის განსაკუთრებული, ხელით გაჭიმული აბრეშუმისებური ძაფებად — მხოლოდ ზაფხულში სრული ცხიმის ძროხის რძიდან.',
          descRu: 'Необычный тянутый сыр, уникальный для Самцхе: вытягивается вручную в шелковистые нити, пирамидой складывается в воздушную горку. Производится только летом из цельного молока.',
        },
      ],
      reviews: [
        {
          name: 'David Nakashidze',
          country: 'Georgia',
          rating: 5,
          date: 'May 2024',
          comment: 'Vardzia alone is worth the trip. Walking through 13th-century carved chambers with the sound of the Mtkvari river below was deeply moving. The Borjomi springs afterwards were perfectly rejuvenating.',
          commentGeo: 'ვარძია მარტო ღირს მოგზაურობა. XIII საუკუნის კლდეში ნაკვეთ სენაკებში სიარული მტკვრის ხმასთან ერთად ძლიერ განმასხივებელი იყო. ბორჯომის წყაროები შემდეგ სრულყოფილი განახლება იყო.',
          commentRu: 'Одна Вардзия стоит поездки. Ходить по палатам XIII века с шумом Мтквари внизу было глубоко волнующе. Боржомские источники стали идеальным завершением.',
          initials: 'DN',
        },
        {
          name: 'Camille Bertrand',
          country: 'France',
          rating: 4,
          date: 'September 2024',
          comment: 'An exceptional tour covering a region most visitors miss. I was amazed by Rabati Castle\'s blend of mosque and Georgian church side by side. Truly a unique destination.',
          commentGeo: 'განსაკუთრებული ტური, რომელიც ფარავს რეგიონს, რომელსაც უმეტეს ტურისტები გვერდს უვლიან. მოხიბლული ვარ რაბათის ციხის ჩამოსხმით — მეჩეთი და ქართული ეკლესია გვერდი-გვერდ.',
          commentRu: 'Исключительный тур по региону, который большинство туристов пропускают. Поразило соседство мечети и грузинской церкви в Рабати — уникальное место.',
          initials: 'CB',
        },
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
      // price: 850,
      image: 'assets/imgs/regions/adjara/batumi.jpg',
      images: [
        'assets/imgs/regions/adjara/batumi.jpg',
        'assets/imgs/regions/adjara/black-sea-coast.jpg',
        'assets/imgs/regions/adjara/gonio.jpg',
        'assets/imgs/regions/adjara/gonio-fortress.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/adjara/cuisine/adjarian-khachapuri.jpg',
          name: 'Adjarian Khachapuri',
          nameGeo: 'აჭარული ხაჭაპური',
          nameRu: 'Аджарский хачапури',
          desc: 'The bread boat: open-faced, egg cracked in the centre and butter melted in. Break the edges of the crust and stir everything together. Georgia\'s most photographed dish.',
          descGeo: 'პურის ნავი: ღია, კვერცხი ცენტრში და გალღობილი კარაქი. ქარქაშის კიდეები გატეხეთ და ყველაფერი ერთად ათქვიფეთ. საქართველოს ყველაზე ფოტოგრაფირებული კერძი.',
          descRu: 'Хлебная лодочка: открытая, с яйцом в центре и растопленным сливочным маслом. Ломайте края теста и всё перемешивайте — самое фотографируемое блюдо Грузии.',
        },
        {
          image: 'assets/imgs/regions/adjara/cuisine/barabulka.jpg',
          name: 'Barabulka (Red Mullet)',
          nameGeo: 'ბარაბულა (წითელი ქაფშია)',
          nameRu: 'Барабулька',
          desc: 'Freshly caught Black Sea red mullet, lightly seasoned and pan-fried whole. A Batumi seaside staple that captures the flavour of the Black Sea in every bite.',
          descGeo: 'ახლად დაჭერილი შავი ზღვის წითელი ქაფშია, მსუბუქად სანელებლებიანი და მთლიანი შეწვილი ტაფაზე — ბათუმის სანაპიროს ტრადიციული კერძი.',
          descRu: 'Свежепойманная черноморская барабулька, слегка приправленная и обжаренная целиком — классика батумского прибрежного ресторана.',
        },
      ],
      reviews: [
        {
          name: 'Ana Gigauri',
          country: 'Georgia',
          rating: 5,
          date: 'June 2024',
          comment: 'Batumi plus the mountains in one trip — I couldn\'t believe how different the landscapes were within the same region. The team were attentive and made our family feel completely at ease.',
          commentGeo: 'ბათუმი და მთები ერთ მოგზაურობაში — ვერ მჯეროდა, რამდენად განსხვავებული ლანდშაფტია ერთ რეგიონში. გუნდი ყურადღებიანი იყო და ოჯახი სრულად კომფორტულად გრძნობდა თავს.',
          commentRu: 'Батуми и горы в одной поездке — не верится, насколько разные пейзажи в одном регионе. Команда внимательная, семья чувствовала себя полностью комфортно.',
          initials: 'AG',
        },
        {
          name: 'Marco Rossi',
          country: 'Italy',
          rating: 5,
          date: 'July 2024',
          comment: 'I came for the sea and stayed for the mountains. The Gonio fortress was a completely unexpected highlight. The S-Class was the perfect vehicle for long coastal drives.',
          commentGeo: 'ზღვისთვის მოვედი და მთებისთვის დავრჩი. გონიოს ციხე სრულიად მოულოდნელი სანახაობა გახდა. S-კლასი სრულყოფილი მანქანა იყო სანაპირო ჩამოსვლებისთვის.',
          commentRu: 'Приехал ради моря, остался ради гор. Гонио оказалось неожиданным открытием. S-Class — идеальный автомобиль для долгих прибрежных поездок.',
          initials: 'MR',
        },
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
      // price: 680,
      image: 'assets/imgs/regions/imereti/prometheus-cave.jpg',
      images: [
        'assets/imgs/regions/imereti/prometheus-cave.jpg',
        'assets/imgs/regions/imereti/gelati-monastery.jpg',
        'assets/imgs/regions/imereti/sataplia-reserve.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/imereti/cuisine/imeruli-khachapuri.webp',
          name: 'Imeruli Khachapuri',
          nameGeo: 'იმერული ხაჭაპური',
          nameRu: 'Имеретинский хачапури',
          desc: 'The classic, flat round khachapuri: a disc of unleavened dough enveloping fresh imeritian cheese. Baked on both sides in a dry pan — golden, crisp, and utterly satisfying.',
          descGeo: 'კლასიკური, ბრტყელი მრგვალი ხაჭაპური: ახალი იმერული ყველით სავსე ფუნჩოზის ცომის დისკო. ორივე მხარეს გამომცხვარი მშრალ ტაფაში — ოქროსფერი, crisp, და სრულყოფილი.',
          descRu: 'Классический плоский круглый хачапури: диск из теста с начинкой из свежего имеретинского сыра. Выпекается с обеих сторон на сухой сковороде — золотистый и хрустящий.',
        },
        {
          image: 'assets/imgs/regions/imereti/cuisine/tabaka-chicken.jpg',
          name: 'Tabaka Chicken',
          nameGeo: 'ტაბაკა',
          nameRu: 'Цыплёнок табака',
          desc: 'A whole spring chicken flattened under a heavy stone and pan-fried in butter until the skin shatters like glass. Served with garlic-walnut sauce (bazhe) and fresh herbs.',
          descGeo: 'ახალგაზრდა ქათამი, ძლიერი ქვის ქვეშ გაბრტყელებული და კარაქში გამომცხვარი სანამ კანი მინისებრ არ გატყდება. ნივრის-თხილის სოუსთან (ბაჟე) და ახალ მწვანილებთან ერთად.',
          descRu: 'Цыплёнок, расплющенный под камнем и жаренный в масле до хрустящей корочки. Подаётся с чесночно-ореховым соусом (баже) и свежей зеленью.',
        },
      ],
      reviews: [
        {
          name: 'Irakli Tsurtsumia',
          country: 'Georgia',
          rating: 5,
          date: 'November 2024',
          comment: 'Prometheus Cave by boat at night with the lights reflecting off the stalactites was absolutely ethereal. Gelati made me feel the weight of Georgian history in a way no museum could.',
          commentGeo: 'ნავით პრომეთეს მღვიმეში ღამით, სტელაქტიტებზე ნათება — სრულად ეთერეული. გელათმა ისე შეაგრძნობინა ქართული ისტორიის სიმძიმე, რაც მუზეუმს არ შეეძლო.',
          commentRu: 'Пещера Прометея ночью на лодке, когда огни отражаются от сталактитов — это что-то эфирное. Гелати дал ощутить тяжесть грузинской истории, как ни один музей.',
          initials: 'IT',
        },
        {
          name: 'Yuki Tanaka',
          country: 'Japan',
          rating: 5,
          date: 'October 2024',
          comment: 'Georgia was not on my bucket list — it is now permanently at the top. The dinosaur footprints at Sataplia were a wonderful surprise and the driver was wonderfully hospitable.',
          commentGeo: 'საქართველო ჩემს სიებში არ იყო — ახლა ყოველთვის სიის სათავეში იქნება. საჟარბიაში დინოზავრის კვალი გასაოცარი სიურპრიზი იყო, მძღოლი კი სასიამოვნოდ სტუმართმოყვარე.',
          commentRu: 'Грузии не было в моём списке — теперь она всегда будет первой. Следы динозавров в Сатаплии стали чудесным сюрпризом, а водитель был исключительно гостеприимен.',
          initials: 'YT',
        },
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
      // price: 920,
      image: 'assets/imgs/regions/samegrelo/martvili.jpg',
      images: [
        'assets/imgs/regions/samegrelo/martvili.jpg',
        'assets/imgs/regions/samegrelo/martvili-2.jpg',
        'assets/imgs/regions/samegrelo/dadiani-palace.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/samegrelo/cuisine/megruli-khachapuri.webp',
          name: 'Megruli Khachapuri',
          nameGeo: 'მეგრული ხაჭაპური',
          nameRu: 'Мегрельский хачапури',
          desc: 'The double-cheese khachapuri: sulguni inside the dough AND more sulguni melted on top. Megrelians believe more cheese is never enough — and they are right.',
          descGeo: 'ორმაგი ყველის ხაჭაპური: სულგუნი ცომის შიგნით და კიდევ სულგუნი ზემოდან გალღობილი. მეგრელები თვლიან, რომ მეტი ყველი ვერასდროს იქნება ზედმეტი — და მართლები არიან.',
          descRu: 'Хачапури с двойным сыром: сулугуни внутри теста И сулугуни расплавленный сверху. Мегрелы уверены: сыра много не бывает — и они правы.',
        },
        {
          image: 'assets/imgs/regions/samegrelo/cuisine/ghomi-and-kharcho.webp',
          name: 'Ghomi with Kharcho',
          nameGeo: 'ღომი ხარჩოთი',
          nameRu: 'Гоми с харчо',
          desc: 'Ghomi is Samegrelo\'s cornmeal porridge — thick, creamy, and neutral — the perfect canvas for fiery Megrelian kharcho stew loaded with walnuts, fenugreek, and adjika spice paste.',
          descGeo: 'ღომი სამეგრელოს სიმინდის ფაფაა — სქელი, კრემისებური და ნეიტრალური — სრულყოფილი ფონი ცხარე მეგრული ხარჩოსთვის თხილის, უცხო-სუნელის და აჯიკის პასტით.',
          descRu: 'Гоми — кукурузная каша Самегрело: густая, кремовая и нейтральная — идеальная основа для огненного мегрельского харчо с орехами, пажитником и аджикой.',
        },
      ],
      reviews: [
        {
          name: 'Elene Diasamidze',
          country: 'Georgia',
          rating: 5,
          date: 'April 2024',
          comment: 'Martvili Canyon kayaking was the most exhilarating hour of my life. The turquoise water was unreal. And the Megrelian feast afterwards — three hours of incredible food. Thank you Vardotour.',
          commentGeo: 'მარტვილის კანიონის კაიაკი ჩემი ცხოვრების ყველაზე ამაღელვებელი საათი იყო. ფირუზისფერი წყალი არარეალური იყო. მეგრული სუფრა შემდეგ — სამი საათი გასაოცარი საკვებით. გმადლობთ, Vardotour!',
          commentRu: 'Каяк в каньоне Мартвили — самый захватывающий час в моей жизни. Бирюзовая вода нереальная. А мегрельский стол после — три часа невероятной еды. Спасибо Vardotour!',
          initials: 'ED',
        },
        {
          name: 'Hassan Al-Farsi',
          country: 'Oman',
          rating: 5,
          date: 'March 2024',
          comment: 'I have travelled to more than 60 countries. Georgia — and specifically Samegrelo — is one of the most surprising destinations I have ever found. Vardotour made everything seamless.',
          commentGeo: '60-ზე მეტ ქვეყანაში ვმოგზაურე. საქართველო — და კონკრეტულად სამეგრელო — ერთ-ერთი ყველაზე გასაოცარი ადგილია, რაც ოდესმე აღმომიჩენია. Vardotour-მა ყველაფერი გაამარტივა.',
          commentRu: 'Я побывал в более чем 60 странах. Грузия — и особенно Самегрело — одно из самых удивительных мест. Vardotour сделал всё безупречно.',
          initials: 'HF',
        },
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
      // price: 750,
      image: 'assets/imgs/regions/kvemo-kartli/dashbashi-canyon.jpg',
      images: [
        'assets/imgs/regions/kvemo-kartli/dashbashi-canyon.jpg',
        'assets/imgs/regions/kvemo-kartli/dashbashi-glass-bridge.jpg',
        'assets/imgs/regions/kvemo-kartli/kveshi-fortress.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/kvemo-kartli/cuisine/lamb-mtsvadi.jpg',
          name: 'Lamb Mtsvadi',
          nameGeo: 'ბატკნის მწვადი',
          nameRu: 'Мцвади из баранины',
          desc: 'Kvemo Kartli\'s shepherding heritage shines in its mtsvadi. Tender lamb cubes marinated in onion and pomegranate juice, then skewered and grilled over apple-wood embers.',
          descGeo: 'ქვემო ქართლის მეცხვარეთა მემკვიდრეობა მის მწვადში ანათებს. ნაზი ბატკნის კუბები ხახვსა და ბროწეულის წვენში დამარინადებული, შემდეგ ხის ნახშირებზე შეწვილი.',
          descRu: 'Пастушеское наследие Квемо-Картли — в мцвади. Нежные кусочки баранины, маринованные в луке и гранатовом соке, жарятся на углях яблоневых дров.',
        },
        {
          image: 'assets/imgs/regions/kvemo-kartli/cuisine/guda-cheese.jpg',
          name: 'Guda Cheese',
          nameGeo: 'გუდა ყველი',
          nameRu: 'Сыр гуда',
          desc: 'Aged sheep\'s milk cheese cured inside an inflated sheepskin bag (guda). The sheepskin imparts a distinctive lanolin and wild-herb note. A shepherds\' cheese unchanged for centuries.',
          descGeo: 'ხნიერი ცხვრის რძის ყველი, განბერილ ცხვრის ტყავის ტომარაში (გუდა) დამარინადებული. ტყავი ანიჭებს განსხვავებულ ლანოლინის და ველური მწვანილის ნოტებს.',
          descRu: 'Выдержанный сыр из овечьего молока, созревающий в надутом кожаном мешке (гуда). Кожа придаёт характерные ноты ланолина и диких трав — пастушеский сыр, не изменившийся веками.',
        },
      ],
      reviews: [
        {
          name: 'Ketevan Gelashvili',
          country: 'Georgia',
          rating: 5,
          date: 'August 2024',
          comment: 'Standing on the glass-floor bridge with the canyon 240 metres below — my heart was pounding! But the vehicle, the team, and the whole experience made me feel completely safe and looked after.',
          commentGeo: 'მინის სართულის ხიდზე ვიდგი კანიონი 240 მეტრი ქვემოთ — გული მიოცა! მაგრამ მანქანა, გუნდი და მთელი გამოცდილება სრულიად უსაფრთხოდ და გაფრთხილებულად შემაგრძნობინა.',
          commentRu: 'Стою на стеклянном мосту, а под ногами каньон 240 метров — сердце замерло! Но автомобиль, команда и весь опыт дали ощущение полной безопасности.',
          initials: 'KG',
        },
        {
          name: 'Pablo Fernandez',
          country: 'Spain',
          rating: 4,
          date: 'September 2024',
          comment: 'A brilliant off-the-beaten-track experience. The multi-ethnic villages were the highlight — I had no idea Georgia was so diverse. Vardotour clearly put thought into the itinerary.',
          commentGeo: 'ბრწყინვალე გასვლა ჩვეულ ბილიკებიდან. მრავალეთნიკური სოფლები იყო განსაკუთრებული — წარმოდგენა არ მქონდა, საქართველო ასე მრავალფეროვანი იყოს. Vardotour-მა ნათლად გააზრება გამოიჩინა.',
          commentRu: 'Отличный опыт за пределами привычных маршрутов. Многонациональные сёла стали главным открытием — не знал, что Грузия такая разнообразная. Vardotour явно продумал маршрут.',
          initials: 'PF',
        },
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
      // price: 710,
      image: 'assets/imgs/regions/shida-kartli/uplistsikhe.jpg',
      images: [
        'assets/imgs/regions/shida-kartli/uplistsikhe.jpg',
        'assets/imgs/regions/shida-kartli/uplistsikhe-2.jpg',
        'assets/imgs/regions/shida-kartli/gori-fortress.jpg',
        'assets/imgs/regions/shida-kartli/stalin-museum.jpg',
        'assets/imgs/regions/shida-kartli/stalin-wagon.jpg',
      ],
      cuisineItems: [
        {
          image: 'assets/imgs/regions/shida-kartli/cuisine/gori-cutlet.jpg',
          name: 'Gori Cutlet',
          nameGeo: 'გორული კოტლეტი',
          nameRu: 'Горийская котлета',
          desc: 'A Georgian-Soviet fusion dish beloved in Gori: a flattened meat patty seasoned with local spices, pan-fried crisp and served with tkemali plum sauce. Simple, earthy, comforting.',
          descGeo: 'ქართულ-საბჭოური შერეული კერძი, გორში საყვარელი: გაბრტყელებული ხორცის კუნდელი ადგილობრივი სანელებლებით, ტაფაში შეწვილი და ტყემლის სოუსთან ერთად. მარტივი, მიწიერი, ნუგეშმომგვრელი.',
          descRu: 'Грузинско-советское блюдо, любимое в Гори: отбивная, приправленная местными специями, обжаренная до хрустящей корочки и поданная с соусом из сливы (ткемали).',
        },
        {
          image: 'assets/imgs/regions/shida-kartli/cuisine/chakrakina.jpg',
          name: 'Chakrakina',
          nameGeo: 'ჩაქრაქინა',
          nameRu: 'Чакракина',
          desc: 'A layered meat and onion dish from Shida Kartli — slow-cooked in its own juices until falling tender. Often made with beef or pork with a generous hand of local herbs and garlic.',
          descGeo: 'შიდა ქართლის ფენებიანი ხორცის და ხახვის კერძი — ნელა გამომცხვარი საკუთარ წვენში სანამ ნაზი არ გახდება. ხშირად მზადდება ძროხის ან ღორის ხორცით ადგილობრივი მწვანილებით.',
          descRu: 'Слоёное блюдо из мяса и лука из Шида-Картли — тушится в собственном соку до мягкости. Обычно готовится из говядины или свинины с щедрой порцией местных трав и чеснока.',
        },
      ],
      reviews: [
        {
          name: 'Levan Kopaliani',
          country: 'Georgia',
          rating: 5,
          date: 'February 2025',
          comment: 'Uplistsikhe at dawn, completely alone in a 3,000-year-old city carved from rock — a privilege I will carry forever. The guide\'s knowledge of pre-Christian Georgia was extraordinary.',
          commentGeo: 'უფლისციხე გათენებისას, სრულიად მარტო 3,000-წლიან კლდეში ნაკვეთ ქალაქში — პრივილეგია, რომელსაც სამუდამოდ შევინახავ. გიდის ქრისტიანობამდელი საქართველოს ცოდნა გასაოცარი იყო.',
          commentRu: 'Уплисцихе на рассвете, совершенно один в 3000-летнем городе, вырезанном из скалы — привилегия, которую я буду помнить всегда. Знания гида о дохристианской Грузии были потрясающими.',
          initials: 'LK',
        },
        {
          name: 'Olga Petrenko',
          country: 'Ukraine',
          rating: 5,
          date: 'May 2024',
          comment: 'The Stalin museum was thought-provoking and the guide handled the complex history with nuance and respect. Gori fortress views were spectacular. A tour I would recommend to every history lover.',
          commentGeo: 'სტალინის მუზეუმი დასაფიქრებელი იყო და გიდმა რთული ისტორია ნიუანსებით და პატივისცემით წარმოადგინა. გორის ციხის ხედები სანახაობრივი იყო. ტური, რომელსაც ყველა ისტორიის მოყვარულს ვURcomend ვიდ.',
          commentRu: 'Музей Сталина заставил задуматься, и гид с нюансами и уважением раскрыл сложную историю. Виды с Горийской крепости были великолепны. Тур, который я рекомендую всем любителям истории.',
          initials: 'OP',
        },
      ],
      tag: 'Heritage',
      shortDescription: 'Walk through a 3,000-year-old cave city, climb a medieval hilltop fortress, and explore the controversial legacy of Stalin\'s birthplace.',
      highlights: ['Uplistsikhe cave city', 'Gori Fortress panorama', 'Stalin Museum & personal railcar', 'Surami Fortress sunset'],
      groupSize: '2–10 guests'
    },
  ];

  getTours(): Tour[] { return this.tours; }

  getTourById(id: number): Tour | undefined {
    return this.tours.find(t => t.id === id);
  }

  getFeaturedTours(count = 3): Tour[] {
    return this.tours.slice(0, count);
  }

  getTourStrings(tour: Tour, lang: LangCode): TourStrings {
    const map = this.i18n[tour.id];
    if (map?.[lang]) return map[lang]!;
    return {
      title: tour.title,
      region: tour.region,
      tag: tour.tag,
      shortDescription: tour.shortDescription,
      highlights: tour.highlights,
    };
  }

  getCuisineItem(item: CuisineItem, lang: LangCode): { name: string; desc: string } {
    if (lang === 'geo') return { name: item.nameGeo, desc: item.descGeo };
    if (lang === 'ru') return { name: item.nameRu, desc: item.descRu };
    return { name: item.name, desc: item.desc };
  }

  getReview(review: Review, lang: LangCode): { comment: string } {
    if (lang === 'geo') return { comment: review.commentGeo };
    if (lang === 'ru') return { comment: review.commentRu };
    return { comment: review.comment };
  }
}
