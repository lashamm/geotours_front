import { Component, Input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Tour, TourService, TourStrings } from '../../services/tour';
import { LanguageService, LangCode } from '../../services/language.service';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-card.html',
  styleUrls: ['./tour-card.scss']
})
export class TourCardComponent {
  @Input() tour!: Tour;

  language: LangCode = 'en';

  constructor(
    private router: Router,
    private ls: LanguageService,
    private tourService: TourService,
  ) {
    effect(() => { this.language = this.ls.lang(); });
  }

  goToDetails() {
    this.router.navigate(['/tours', this.tour.id]);
  }

  get ts(): TourStrings {
    return this.tourService.getTourStrings(this.tour, this.language);
  }

  get T() {
    const map: Record<LangCode, { from: string; viewTour: string }> = {
      en:  { from: 'From',      viewTour: 'View Tour'  },
      geo: { from: 'დან',       viewTour: 'დეტალები'   },
      ru:  { from: 'от',        viewTour: 'Подробнее'  },
      ar:  { from: 'من',        viewTour: 'عرض الجولة' },
      es:  { from: 'Desde',     viewTour: 'Ver tour'   },
      fr:  { from: 'À partir de', viewTour: 'Voir tour'  },
      it:  { from: 'Da',        viewTour: 'Vedi tour'  },
      de:  { from: 'Ab',        viewTour: 'Tour ansehen'},
      zh:  { from: '起',         viewTour: '查看旅游'   },
      tr:  { from: 'İtibaren',  viewTour: 'Turu Gör'  },
    };
    return map[this.language];
  }
}
