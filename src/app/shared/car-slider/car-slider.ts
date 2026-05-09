import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, LangCode } from '../../services/language.service';

interface Car {
  id: string;
  image: string;
  name: string;
  tag: string;
  description: string;
}

interface CarTrans {
  tagGroup: string; tagExec: string;
  vClass: string; vClassDesc: string;
  sClass: string; sClassDesc: string;
}

@Component({
  selector: 'app-car-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-slider.html',
  styleUrls: ['./car-slider.scss']
})
export class CarSliderComponent {
  language: LangCode = 'en';
  activeIndex = 0;
  private touchStartX = 0;

  constructor(private ls: LanguageService) {
    effect(() => { this.language = this.ls.lang(); });
  }

  get t(): CarTrans {
    const map: Record<LangCode, CarTrans> = {
      en: {
        tagGroup: 'GROUP VIP', tagExec: 'EXECUTIVE',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'The versatile VIP van for groups up to 7. Spacious, refined, and equally at home on city boulevards or high-altitude mountain passes.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'The pinnacle of automotive luxury. Perfect for private transfers, diplomatic guests, and those who accept nothing but the finest.',
      },
      geo: {
        tagGroup: 'VIP ჯგუფი', tagExec: 'ექსკლუზიური',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'მრავალფეროვანი VIP ფურგონი 7 კაცამდე ჯგუფებისთვის. ფართო და დახვეწილი ნებისმიერ გზაზე.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'საავტომობილო ფუფუნების მწვერვალი. სრულყოფილი კერძო გადაყვანისთვის.',
      },
      ru: {
        tagGroup: 'VIP ГРУППА', tagExec: 'БИЗНЕС',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Универсальный VIP-минивэн для групп до 7 человек. Просторный и изысканный на любом маршруте.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Вершина автомобильной роскоши. Идеален для частных трансферов и взыскательных гостей.',
      },
      ar: {
        tagGroup: 'VIP مجموعة', tagExec: 'تنفيذي',
        vClass: 'مرسيدس V-Class',
        vClassDesc: 'حافلة VIP للمجموعات حتى 7 أشخاص. فسيحة وراقية.',
        sClass: 'مرسيدس S-Class',
        sClassDesc: 'قمة الفخامة. مثالية للنقل الخاص.',
      },
      es: {
        tagGroup: 'VIP GRUPO', tagExec: 'EJECUTIVO',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Furgoneta VIP para grupos de hasta 7 personas. Espaciosa y refinada.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'La cima del lujo. Ideal para traslados privados.',
      },
      fr: {
        tagGroup: 'VIP GROUPE', tagExec: 'EXÉCUTIF',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Van VIP pour groupes jusqu\'à 7 personnes. Spacieux et raffiné.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Le summum du luxe automobile. Idéal pour les transferts privés.',
      },
      it: {
        tagGroup: 'VIP GRUPPO', tagExec: 'EXECUTIVE',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Furgone VIP per gruppi fino a 7 persone. Spazioso e raffinato.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'L\'apice del lusso. Ideale per trasferimenti privati.',
      },
      de: {
        tagGroup: 'VIP GRUPPE', tagExec: 'EXECUTIVE',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'VIP-Van für Gruppen bis zu 7 Personen. Geräumig und edel.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Der Gipfel des Luxus. Ideal für private Transfers.',
      },
      zh: {
        tagGroup: 'VIP团队', tagExec: '行政专属',
        vClass: '梅赛德斯V级',
        vClassDesc: '可容纳7人的VIP厢式车，宽敞精致。',
        sClass: '梅赛德斯S级',
        sClassDesc: '汽车奢华的顶峰，私人接送首选。',
      },
      tr: {
        tagGroup: 'VIP GRUP', tagExec: 'EKSEKÜTİF',
        vClass: 'Mercedes V-Class',
        vClassDesc: '7 kişiye kadar gruplar için VIP minibüs. Geniş ve zarif.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Otomobil lüksünün zirvesi. Özel transferler için ideal.',
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
      },
      {
        id: 'sclass',
        image: 'assets/imgs/cars/s class.png',
        name: this.t.sClass,
        tag: this.t.tagExec,
        description: this.t.sClassDesc,
      },
    ];
  }

  goTo(i: number) { this.activeIndex = i; }
  prev() { this.activeIndex = (this.activeIndex - 1 + 2) % 2; }
  next() { this.activeIndex = (this.activeIndex + 1) % 2; }

  onTouchStart(e: TouchEvent) { this.touchStartX = e.touches[0].clientX; }
  onTouchEnd(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) > 50) { delta < 0 ? this.next() : this.prev(); }
  }
}
