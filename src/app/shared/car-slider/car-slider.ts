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
        tagGroup: 'VIP مجموعة', tagExec: 'خاص',
        vClass: 'مرسيدس V-Class',
        vClassDesc: 'سيارة VIP فسيحة للمجموعات حتى 7 أشخاص. مريحة على أي طريق.',
        sClass: 'مرسيدس S-Class',
        sClassDesc: 'أفضل سيارة للنقل الخاص. راحة وفخامة تامة.',
      },
      es: {
        tagGroup: 'VIP GRUPO', tagExec: 'PRIVADO',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Una furgoneta VIP espaciosa para grupos de hasta 7 personas. Cómoda en cualquier camino.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'El mejor auto para traslados privados. Máxima comodidad garantizada.',
      },
      fr: {
        tagGroup: 'VIP GROUPE', tagExec: 'PRIVÉ',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Un van VIP spacieux pour les groupes jusqu\'à 7 personnes. Confortable sur toutes les routes.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'La meilleure voiture pour les transferts privés. Confort maximum garanti.',
      },
      it: {
        tagGroup: 'VIP GRUPPO', tagExec: 'PRIVATO',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Un van VIP spazioso per gruppi fino a 7 persone. Comodo su qualsiasi strada.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'La migliore auto per i trasferimenti privati. Massimo comfort garantito.',
      },
      de: {
        tagGroup: 'VIP GRUPPE', tagExec: 'PRIVAT',
        vClass: 'Mercedes V-Class',
        vClassDesc: 'Ein geräumiger VIP-Van für Gruppen bis zu 7 Personen. Komfortabel auf jeder Straße.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Das beste Auto für private Transfers. Maximaler Komfort garantiert.',
      },
      zh: {
        tagGroup: 'VIP团队', tagExec: '私人专属',
        vClass: '梅赛德斯V级',
        vClassDesc: '可容纳7人的宽敞VIP厢式车，任何路况下都舒适。',
        sClass: '梅赛德斯S级',
        sClassDesc: '私人接送的最佳豪华车，舒适有保障。',
      },
      tr: {
        tagGroup: 'VIP GRUP', tagExec: 'ÖZEL',
        vClass: 'Mercedes V-Class',
        vClassDesc: '7 kişiye kadar gruplar için geniş bir VIP minibüs. Her yolda rahat.',
        sClass: 'Mercedes S-Class',
        sClassDesc: 'Özel transferler için en iyi lüks araç. Maksimum konfor garantili.',
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
