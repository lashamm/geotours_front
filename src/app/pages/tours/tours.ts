import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService, Tour } from '../../services/tour';
import { TourCardComponent } from '../../shared/tour-card/tour-card';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, RouterLink, TourCardComponent],
  templateUrl: './tours.html',
  styleUrls: ['./tours.scss']
})
export class ToursComponent implements OnInit {

  tours: Tour[] = [];

  // 🌍 language
  language: 'en' | 'geo' | 'ru' = 'en';

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.tours = this.tourService.getTours();

    const savedLang = localStorage.getItem('lang') as 'en' | 'geo' | 'ru';
    if (savedLang) this.language = savedLang;
  }

  setLanguage(lang: 'en' | 'geo' | 'ru') {
    this.language = lang;
    localStorage.setItem('lang', lang);
  }

  // 🌐 translations
  translations = {
    en: {
      label: 'Our Experiences',
      title: 'All Tours',
      sub: 'curated journeys across Georgia, from hidden mountain valleys to ancient wine cellars.',

      ctaTitle: "Can't Find Your Perfect Trip?",
      ctaText: "Tell us your vision and we'll craft a bespoke itinerary just for you.",
      ctaBtn: 'Request Custom Tour'
    },

    geo: {
      label: 'ჩვენი გამოცდილებები',
      title: 'ყველა ტური',
      sub: 'შერჩეული მოგზაურობები საქართველოში — მთებიდან ღვინის მარანებამდე.',

      ctaTitle: 'ვერ პოულობთ იდეალურ ტურს?',
      ctaText: 'მოგვწერეთ და ჩვენ დაგიგეგმავთ ინდივიდუალურ მოგზაურობას.',
      ctaBtn: 'ინდივიდუალური ტურის მოთხოვნა'
    },

    ru: {
      label: 'Наши туры',
      title: 'Все туры',
      sub: 'уникальные путешествия по Грузии — от гор до винных погребов.',

      ctaTitle: 'Не нашли идеальный тур?',
      ctaText: 'Расскажите нам — мы создадим маршрут для вас.',
      ctaBtn: 'Индивидуальный тур'
    }
  };
}