import { Component, OnInit, OnDestroy, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TourService, Tour, TourStrings, CuisineItem, Review } from '../../services/tour';
import { LanguageService, LangCode } from '../../services/language.service';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tour-details.html',
  styleUrls: ['./tour-details.scss']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  tour: Tour | undefined;
  language: LangCode = 'en';

  activeSlide = 0;
  private autoplayTimer: any;

  selectedCuisine: CuisineItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private ls: LanguageService,
  ) {
    effect(() => { this.language = this.ls.lang(); });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tour = this.tourService.getTourById(+id);
      if (this.tour?.images?.length) this.startAutoplay();
    }
  }

  ngOnDestroy() { this.stopAutoplay(); }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopAutoplay();
    this.startAutoplay();
  }

  nextSlide() {
    const total = this.tour?.images?.length ?? 1;
    this.activeSlide = (this.activeSlide + 1) % total;
    this.stopAutoplay();
    this.startAutoplay();
  }

  prevSlide() {
    const total = this.tour?.images?.length ?? 1;
    this.activeSlide = (this.activeSlide - 1 + total) % total;
    this.stopAutoplay();
    this.startAutoplay();
  }

  private startAutoplay() {
    this.autoplayTimer = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }

  openCuisine(item: CuisineItem) { this.selectedCuisine = item; }
  closeCuisine() { this.selectedCuisine = null; }

  get ts(): TourStrings | null {
    return this.tour ? this.tourService.getTourStrings(this.tour, this.language) : null;
  }

  cuisineName(item: CuisineItem): string {
    return this.tourService.getCuisineItem(item, this.language).name;
  }

  cuisineDesc(item: CuisineItem): string {
    return this.tourService.getCuisineItem(item, this.language).desc;
  }

  reviewComment(r: Review): string {
    return this.tourService.getReview(r, this.language).comment;
  }

  stars(n: number): number[] {
    return Array(n).fill(0);
  }

  get L() {
    const map: Record<LangCode, {
      tours: string; overview: string; highlights: string; cuisine: string;
      reviews: string; quickInfo: string; duration: string; region: string;
      category: string; from: string; perPerson: string; book: string;
      scroll: string; startingFrom: string;
    }> = {
      en: {
        tours: 'Tours', overview: 'Overview', highlights: 'Highlights',
        cuisine: 'Local Cuisine', reviews: 'Guest Reviews', quickInfo: 'Quick Info',
        duration: 'Duration', region: 'Region', category: 'Category',
        from: 'From', perPerson: '/ person', book: 'Book This Tour',
        scroll: 'Scroll', startingFrom: 'Starting from',
      },
      geo: {
        tours: 'ტურები', overview: 'მიმოხილვა', highlights: 'მნიშვნელოვანი',
        cuisine: 'ადგილობრივი კულინარია', reviews: 'სტუმრების შეფასებები', quickInfo: 'სწრაფი ინფო',
        duration: 'ხანგრძლივობა', region: 'რეგიონი', category: 'კატეგორია',
        from: 'დან', perPerson: '/ კაცი', book: 'ტურის დაჯავშნა',
        scroll: 'გადახვევა', startingFrom: 'დაწყებული',
      },
      ru: {
        tours: 'Туры', overview: 'Обзор', highlights: 'Основное',
        cuisine: 'Местная кухня', reviews: 'Отзывы гостей', quickInfo: 'Кратко',
        duration: 'Продолжительность', region: 'Регион', category: 'Категория',
        from: 'от', perPerson: '/ чел.', book: 'Забронировать',
        scroll: 'Прокрутить', startingFrom: 'Начиная от',
      },
      ar: {
        tours: 'الجولات', overview: 'نظرة عامة', highlights: 'أبرز المعالم',
        cuisine: 'المطبخ المحلي', reviews: 'آراء الضيوف', quickInfo: 'معلومات سريعة',
        duration: 'المدة', region: 'المنطقة', category: 'الفئة',
        from: 'من', perPerson: '/ شخص', book: 'احجز هذه الجولة',
        scroll: 'تمرير', startingFrom: 'ابتداءً من',
      },
      es: {
        tours: 'Tours', overview: 'Descripción', highlights: 'Destacados',
        cuisine: 'Cocina local', reviews: 'Reseñas de huéspedes', quickInfo: 'Info rápida',
        duration: 'Duración', region: 'Región', category: 'Categoría',
        from: 'Desde', perPerson: '/ persona', book: 'Reservar este tour',
        scroll: 'Desplazar', startingFrom: 'Desde',
      },
      fr: {
        tours: 'Tours', overview: 'Aperçu', highlights: 'Points forts',
        cuisine: 'Cuisine locale', reviews: 'Avis des voyageurs', quickInfo: 'Info rapide',
        duration: 'Durée', region: 'Région', category: 'Catégorie',
        from: 'À partir de', perPerson: '/ personne', book: 'Réserver ce tour',
        scroll: 'Défiler', startingFrom: 'À partir de',
      },
      it: {
        tours: 'Tour', overview: 'Panoramica', highlights: 'Punti salienti',
        cuisine: 'Cucina locale', reviews: 'Recensioni ospiti', quickInfo: 'Info rapide',
        duration: 'Durata', region: 'Regione', category: 'Categoria',
        from: 'Da', perPerson: '/ persona', book: 'Prenota questo tour',
        scroll: 'Scorri', startingFrom: 'Da',
      },
      de: {
        tours: 'Touren', overview: 'Überblick', highlights: 'Highlights',
        cuisine: 'Lokale Küche', reviews: 'Gästebewertungen', quickInfo: 'Kurzinfo',
        duration: 'Dauer', region: 'Region', category: 'Kategorie',
        from: 'Ab', perPerson: '/ Person', book: 'Tour buchen',
        scroll: 'Scrollen', startingFrom: 'Ab',
      },
      zh: {
        tours: '旅游', overview: '概览', highlights: '亮点',
        cuisine: '当地美食', reviews: '客人评价', quickInfo: '快速信息',
        duration: '时长', region: '地区', category: '类别',
        from: '起', perPerson: '/ 人', book: '预订此旅游',
        scroll: '滚动', startingFrom: '起价',
      },
      tr: {
        tours: 'Turlar', overview: 'Genel Bakış', highlights: 'Öne Çıkanlar',
        cuisine: 'Yerel Mutfak', reviews: 'Misafir Yorumları', quickInfo: 'Hızlı Bilgi',
        duration: 'Süre', region: 'Bölge', category: 'Kategori',
        from: 'İtibaren', perPerson: '/ kişi', book: 'Bu Turu Rezerve Et',
        scroll: 'Kaydır', startingFrom: 'Başlangıç fiyatı',
      },
    };
    return map[this.language];
  }
}
