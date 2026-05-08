import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService, Tour } from '../../services/tour';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // 🌍 LANGUAGE
  language: 'en' | 'geo' | 'ru' = 'en';

  setLanguage(lang: 'en' | 'geo' | 'ru') {
    this.language = lang;
    localStorage.setItem('lang', lang);
  }

  // 🎯 TOURS
  featuredTours: Tour[] = [];
  currentSlide = 0;
  private slideInterval: any;

  // 📊 STATS (can also translate if you want later)
  stats = [
    { value: '120+', label: 'Tours Completed' },
    { value: '98%',  label: 'Guest Satisfaction' },
    { value: '12',   label: 'Years of Excellence' },
    { value: '40+',  label: 'Hidden Destinations' }
  ];

  constructor(private tourService: TourService) {}

  ngOnInit() {
    // load saved language
    const savedLang = localStorage.getItem('lang') as 'en' | 'geo' | 'ru';
    if (savedLang) this.language = savedLang;

    this.featuredTours = this.tourService.getFeaturedTours(3);
    this.startSlider();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredTours.length;
    }, 5000);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideInterval);
    this.startSlider();
  }

  // 🌐 TRANSLATIONS
  translations = {
    en: {
      welcome: 'Welcome to Georgia',
      heroTitle: 'Where Ancient',
      heroTitle2: 'Meets Timeless',
      heroSub: 'Handcrafted luxury journeys through the Caucasus — from glacial peaks to sacred monasteries and centuries-old wine cellars.',
      explore: 'Explore Tours',
      story: 'Our Story',
      scroll: 'Scroll',

      years: 'Years of Excellence',
      about: 'About Vardotour',
      aboutTitle: 'Georgia Deserves to Be Experienced, Not Just Visited',
      aboutText1: 'We are a boutique travel house born in Tbilisi, dedicated to revealing the soul of Georgia.',
      aboutText2: 'Every itinerary is handcrafted. Every guide is a local expert. Every moment is yours.',
      discover: 'Discover Our Tours',

      curated: 'Curated Experiences',
      featured: 'Featured Tours',
      from: 'From',
      details: 'View Details',
      allTours: 'View All Tours',

      why: 'Why Vardotour',
      difference: 'The Vardotour Difference',

      w1Title: 'Exclusively Boutique',
      w1Text: 'Small groups only. Never more than 8 guests.',
      w2Title: 'Local Expertise',
      w2Text: 'Our guides are born and raised in Georgia.',
      w3Title: 'Tailored Itineraries',
      w3Text: 'Every journey is crafted around you.',
      w4Title: 'End-to-End Care',
      w4Text: 'We are with you every step of the journey.',

      contact: 'Get in Touch',
      begin: 'Begin Your Journey',
      contactText: 'Tell us your dream — we will craft the experience around it.',
      phone: 'Phone',
      location: 'Location',

      name: 'Your Name',
      email: 'Email Address',
      tourSelect: 'Tour of Interest',
      message: 'Tell us about your trip...',
      send: 'Send Enquiry'
    },

    geo: {
      welcome: 'კეთილი იყოს თქვენი მობრძანება საქართველოში',
      heroTitle: 'სადაც ძველი',
      heroTitle2: 'შეხვდება მარადიულს',
      heroSub: 'დახვეწილი მოგზაურობები კავკასიაში — მყინვარული მწვერვალებიდან წმინდა მონასტრებამდე.',
      explore: 'ტურების ნახვა',
      story: 'ჩვენ შესახებ',
      scroll: 'ჩასქროლეთ',

      years: 'წლის გამოცდილება',
      about: 'Vardotour შესახებ',
      aboutTitle: 'საქართველო უნდა იგრძნო და არა მხოლოდ ნახო',
      aboutText1: 'ჩვენ ვართ ბუტიკური ტურისტული კომპანია ტბილისიდან.',
      aboutText2: 'ყველაფერი ინდივიდუალურად იგეგმება.',
      discover: 'ტურების აღმოჩენა',

      curated: 'რჩეული გამოცდილებები',
      featured: 'რჩეული ტურები',
      from: 'დან',
      details: 'დეტალები',
      allTours: 'ყველა ტური',

      why: 'რატომ ჩვენ',
      difference: 'ჩვენი უპირატესობა',

      w1Title: 'ბუტიკური',
      w1Text: 'პატარა ჯგუფები.',
      w2Title: 'ადგილობრივი',
      w2Text: 'ადგილობრივი გიდები.',
      w3Title: 'ინდივიდუალური',
      w3Text: 'თქვენზე მორგებული.',
      w4Title: 'მხარდაჭერა',
      w4Text: 'სრული მხარდაჭერა.',

      contact: 'დაგვიკავშირდით',
      begin: 'დაიწყეთ მოგზაურობა',
      contactText: 'მოგვწერეთ თქვენი იდეა.',
      phone: 'ტელეფონი',
      location: 'მდებარეობა',

      name: 'თქვენი სახელი',
      email: 'ელფოსტა',
      tourSelect: 'აირჩიეთ ტური',
      message: 'აღწერეთ მოგზაურობა...',
      send: 'გაგზავნა'
    },

    ru: {
      welcome: 'Добро пожаловать в Грузию',
      heroTitle: 'Где древность',
      heroTitle2: 'встречает вечность',
      heroSub: 'Роскошные путешествия по Кавказу — от гор до монастырей.',
      explore: 'Смотреть туры',
      story: 'Наша история',
      scroll: 'Прокрутите',

      years: 'лет опыта',
      about: 'О Vardotour',
      aboutTitle: 'Грузию нужно прожить',
      aboutText1: 'Мы туристическая компания из Тбилиси.',
      aboutText2: 'Каждый маршрут создаётся вручную.',
      discover: 'Открыть туры',

      curated: 'Подобранные впечатления',
      featured: 'Популярные туры',
      from: 'от',
      details: 'Подробнее',
      allTours: 'Все туры',

      why: 'Почему мы',
      difference: 'Наше преимущество',

      w1Title: 'Бутик формат',
      w1Text: 'Маленькие группы.',
      w2Title: 'Эксперты',
      w2Text: 'Местные гиды.',
      w3Title: 'Индивидуально',
      w3Text: 'Под вас.',
      w4Title: 'Поддержка',
      w4Text: 'Полная поддержка.',

      contact: 'Свяжитесь с нами',
      begin: 'Начните путешествие',
      contactText: 'Расскажите о своей мечте.',
      phone: 'Телефон',
      location: 'Локация',

      name: 'Ваше имя',
      email: 'Email',
      tourSelect: 'Выберите тур',
      message: 'Опишите поездку...',
      send: 'Отправить'
    }
  };

}