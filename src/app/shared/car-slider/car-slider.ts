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
  tagGroup: string; tagExec: string;
  details: string; book: string;
  vClass: string; vClassDesc: string;
  sClass: string; sClassDesc: string;
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
        tagGroup: 'GROUP VIP', tagExec: 'EXECUTIVE',
        details: 'View Details', book: 'Book This Vehicle',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'The versatile VIP van for groups up to 7. Spacious, refined, and equally at home on city boulevards or high-altitude mountain passes.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'The pinnacle of automotive luxury. Perfect for private transfers, diplomatic guests, and those who accept nothing but the finest.',
      },
      geo: {
        tagGroup: 'VIP ჯგუფი', tagExec: 'ექსკლუზიური',
        details: 'დეტალები', book: 'დაჯავშნა',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'მრავალფეროვანი VIP ფურგონი 7 კაცამდე ჯგუფებისთვის. ფართო და დახვეწილი ნებისმიერ გზაზე.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'საავტომობილო ფუფუნების მწვერვალი. სრულყოფილი კერძო გადაყვანისთვის.',
      },
      ru: {
        tagGroup: 'VIP ГРУППА', tagExec: 'БИЗНЕС',
        details: 'Подробнее', book: 'Забронировать',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Универсальный VIP-минивэн для групп до 7 человек. Просторный и изысканный на любом маршруте.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Вершина автомобильной роскоши. Идеален для частных трансферов и взыскательных гостей.',
      },
      ar: {
        tagGroup: 'VIP مجموعة', tagExec: 'تنفيذي',
        details: 'التفاصيل', book: 'احجز الآن',
        vClass: 'مرسيدس V-Class',
        vClassDesc: 'حافلة VIP متعددة الاستخدامات للمجموعات حتى 7 أشخاص. فسيحة وراقية في أي طريق.',
        sClass: 'مرسيدس S-Class',
        sClassDesc: 'قمة الفخامة. مثالية للنقل الخاص والضيوف الدبلوماسيين.',
      },
      es: {
        tagGroup: 'VIP GRUPO', tagExec: 'EJECUTIVO',
        details: 'Ver detalles', book: 'Reservar',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'La furgoneta VIP versátil para grupos de hasta 7 personas. Espaciosa y refinada en cualquier terreno.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'La cima del lujo automovilístico. Ideal para traslados privados y huéspedes exigentes.',
      },
      fr: {
        tagGroup: 'VIP GROUPE', tagExec: 'EXÉCUTIF',
        details: 'Voir les détails', book: 'Réserver',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Le van VIP polyvalent pour les groupes jusqu\'à 7 personnes. Spacieux et raffiné sur tous les terrains.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Le summum du luxe automobile. Idéal pour les transferts privés et les hôtes exigeants.',
      },
      it: {
        tagGroup: 'VIP GRUPPO', tagExec: 'EXECUTIVE',
        details: 'Dettagli', book: 'Prenota',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Il furgone VIP versatile per gruppi fino a 7 persone. Spazioso e raffinato su ogni terreno.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'L\'apice del lusso automobilistico. Ideale per trasferimenti privati e ospiti esigenti.',
      },
      de: {
        tagGroup: 'VIP GRUPPE', tagExec: 'EXECUTIVE',
        details: 'Details ansehen', book: 'Buchen',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Der vielseitige VIP-Van für Gruppen bis zu 7 Personen. Geräumig und edel auf jedem Terrain.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Der Gipfel des automobilen Luxus. Ideal für private Transfers und anspruchsvolle Gäste.',
      },
      zh: {
        tagGroup: 'VIP团队', tagExec: '行政专属',
        details: '查看详情', book: '立即预订',
        vClass: '梅赛德斯V级',
        vClassDesc: '可容纳7人的多功能VIP厢式车，宽敞精致，适应各种地形。',
        sClass: '梅赛德斯S级',
        sClassDesc: '汽车奢华的顶峰。私人接送和贵宾服务的完美之选。',
      },
      tr: {
        tagGroup: 'VIP GRUP', tagExec: 'EKSEKÜTİF',
        details: 'Detayları Gör', book: 'Rezervasyon Yap',
        vClass: 'Mercedes V-Class',
        vClassDesc: '7 kişiye kadar gruplar için çok amaçlı VIP minibüs. Her arazide geniş ve zarif.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Otomobil lüksünün zirvesi. Özel transferler ve seçkin misafirler için ideal.',
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
    ];
  }

  private touchStartX = 0;

  goTo(i: number) { this.activeIndex = i; }
  prev() { this.activeIndex = (this.activeIndex - 1 + 2) % 2; }
  next() { this.activeIndex = (this.activeIndex + 1) % 2; }
  open(car: Car) { this.selectedCar = car; }
  close() { this.selectedCar = null; }

  onTouchStart(e: TouchEvent) { this.touchStartX = e.touches[0].clientX; }
  onTouchEnd(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) > 50) { delta < 0 ? this.next() : this.prev(); }
  }
}
