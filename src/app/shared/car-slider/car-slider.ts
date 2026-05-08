import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService, LangCode } from '../../services/language.service';

interface Car {
  id: string;
  image: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
}

interface CarTrans {
  tagGroup: string; tagExec: string; tagOffroad: string;
  details: string; book: string;
  vClass: string; vClassDesc: string;
  sClass: string; sClassDesc: string;
  toyota: string; toyotaDesc: string;
}

@Component({
  selector: 'app-car-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-slider.html',
  styleUrls: ['./car-slider.scss']
})
export class CarSliderComponent {
  language: LangCode = 'en';
  activeIndex = 0;
  selectedCar: Car | null = null;

  constructor(private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  get t(): CarTrans {
    const map: Record<LangCode, CarTrans> = {
      en: {
        tagGroup: 'GROUP VIP', tagExec: 'EXECUTIVE', tagOffroad: 'OFF-ROAD',
        details: 'View Details', book: 'Book This Vehicle',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'The versatile VIP van for groups up to 7. Spacious, refined, and equally at home on city boulevards or high-altitude mountain passes.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'The pinnacle of automotive luxury. Perfect for private transfers, diplomatic guests, and those who accept nothing but the finest.',
        toyota: 'Premium 4×4',
        toyotaDesc: 'When the road ends, the journey continues. Our expedition 4×4s reach Georgia\'s remotest monasteries, canyons, and highland villages.',
      },
      geo: {
        tagGroup: 'VIP ჯგუფი', tagExec: 'ექსკლუზიური', tagOffroad: 'ოფ-როუდი',
        details: 'დეტალები', book: 'დაჯავშნა',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'მრავალფეროვანი VIP ფურგონი 7 კაცამდე ჯგუფებისთვის. ფართო და დახვეწილი ნებისმიერ გზაზე.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'საავტომობილო ფუფუნების მწვერვალი. სრულყოფილი კერძო გადაყვანისთვის.',
        toyota: 'პრემიუმ 4×4',
        toyotaDesc: 'როდესაც გზა მთავრდება, მოგზაურობა გრძელდება. ჩვენი 4×4 გიყვანთ ყველაზე შორეულ ადგილებამდე.',
      },
      ru: {
        tagGroup: 'VIP ГРУППА', tagExec: 'БИЗНЕС', tagOffroad: 'ВНЕДОРОЖНИК',
        details: 'Подробнее', book: 'Забронировать',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Универсальный VIP-минивэн для групп до 7 человек. Просторный и изысканный на любом маршруте.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Вершина автомобильной роскоши. Идеален для частных трансферов и взыскательных гостей.',
        toyota: 'Премиум 4×4',
        toyotaDesc: 'Там, где заканчивается дорога, путешествие продолжается.',
      },
      ar: {
        tagGroup: 'VIP مجموعة', tagExec: 'تنفيذي', tagOffroad: 'طرق وعرة',
        details: 'التفاصيل', book: 'احجز الآن',
        vClass: 'مرسيدس V-Class',
        vClassDesc: 'حافلة VIP متعددة الاستخدامات للمجموعات حتى 7 أشخاص.',
        sClass: 'مرسيدس S-Class',
        sClassDesc: 'قمة الفخامة. مثالية للنقل الخاص والضيوف الدبلوماسيين.',
        toyota: 'دفع رباعي فاخر',
        toyotaDesc: 'عندما تنتهي الطريق، تستمر الرحلة.',
      },
      es: {
        tagGroup: 'VIP GRUPO', tagExec: 'EJECUTIVO', tagOffroad: 'TODOTERRENO',
        details: 'Ver detalles', book: 'Reservar',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'La furgoneta VIP versátil para grupos de hasta 7 personas.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'La cima del lujo automovilístico. Ideal para traslados privados.',
        toyota: 'Todo terreno premium',
        toyotaDesc: 'Cuando termina la carretera, continúa el viaje.',
      },
      fr: {
        tagGroup: 'VIP GROUPE', tagExec: 'EXÉCUTIF', tagOffroad: 'TOUT-TERRAIN',
        details: 'Voir les détails', book: 'Réserver',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Le van VIP polyvalent pour les groupes jusqu\'à 7 personnes.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Le summum du luxe automobile.',
        toyota: '4×4 premium',
        toyotaDesc: 'Quand la route se termine, le voyage continue.',
      },
      it: {
        tagGroup: 'VIP GRUPPO', tagExec: 'EXECUTIVE', tagOffroad: 'FUORISTRADA',
        details: 'Dettagli', book: 'Prenota',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Il furgone VIP versatile per gruppi fino a 7 persone.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'L\'apice del lusso automobilistico.',
        toyota: '4×4 premium',
        toyotaDesc: 'Quando finisce la strada, il viaggio continua.',
      },
      de: {
        tagGroup: 'VIP GRUPPE', tagExec: 'EXECUTIVE', tagOffroad: 'GELÄNDEWAGEN',
        details: 'Details ansehen', book: 'Buchen',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Der vielseitige VIP-Van für Gruppen bis zu 7 Personen.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Der Gipfel des automobilen Luxus.',
        toyota: 'Premium-Geländewagen',
        toyotaDesc: 'Wo die Straße endet, geht die Reise weiter.',
      },
      zh: {
        tagGroup: 'VIP团队', tagExec: '行政专属', tagOffroad: '越野探险',
        details: '查看详情', book: '立即预订',
        vClass: '梅赛德斯V级',
        vClassDesc: '可容纳7人的多功能VIP厢式车，宽敞精致。',
        sClass: '梅赛德斯S级',
        sClassDesc: '汽车奢华的顶峰。私人接送的完美之选。',
        toyota: '高端四驱车',
        toyotaDesc: '道路尽头，旅程继续。',
      },
      tr: {
        tagGroup: 'VIP GRUP', tagExec: 'EKSEKÜTİF', tagOffroad: 'OFF-ROAD',
        details: 'Detayları Gör', book: 'Rezervasyon Yap',
        vClass: 'Mercedes V-Class',
        vClassDesc: '7 kişiye kadar gruplar için çok amaçlı VIP minibüs.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Otomobil lüksünün zirvesi. Özel transferler için ideal.',
        toyota: 'Premium 4×4',
        toyotaDesc: 'Yol bittiğinde yolculuk devam eder.',
      },
    };
    return map[this.language];
  }

  get cars(): Car[] {
    return [
      {
        id: 'vclass',
        image: 'assets/imgs/cars/vclass.png',
        name: this.t.vClass,
        tag: this.t.tagGroup,
        description: this.t.vClassDesc,
        features: ['Up to 7 passengers', 'Full climate control', 'Privacy glass', 'Panoramic roof option', 'USB & charging ports', 'Luggage space for all'],
      },
      {
        id: 'sclass',
        image: 'assets/imgs/cars/s class.png',
        name: this.t.sClass,
        tag: this.t.tagExec,
        description: this.t.sClassDesc,
        features: ['Up to 3 passengers', 'Massaging rear seats', 'MBUX infotainment', '64-color ambient lighting', 'Burmester® surround sound', 'Full privacy glass'],
      },
      {
        id: 'toyota',
        image: 'assets/imgs/cars/toyota.png',
        name: this.t.toyota,
        tag: this.t.tagOffroad,
        description: this.t.toyotaDesc,
        features: ['Up to 5 passengers', '4WD with diff lock', 'High ground clearance', 'Rooftop luggage rack', 'Recovery & first-aid kit', 'All-terrain tyres'],
      },
    ];
  }

  goTo(i: number) { this.activeIndex = i; }
  prev() { this.activeIndex = (this.activeIndex - 1 + 3) % 3; }
  next() { this.activeIndex = (this.activeIndex + 1) % 3; }
  open(car: Car) { this.selectedCar = car; }
  close() { this.selectedCar = null; }
}
