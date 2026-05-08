import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

export type LangCode = 'en' | 'geo' | 'ru' | 'ar' | 'es' | 'fr' | 'it' | 'de' | 'zh' | 'tr';

export interface LangOption {
  code: LangCode;
  label: string;
  short: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  open = false;
  scrolled = false;
  langOpen = false;
  language: LangCode = 'en';

  readonly languages: LangOption[] = [
    { code: 'geo', label: 'ქართული',  short: 'ქარ' },
    { code: 'en',  label: 'English',   short: 'EN'  },
    { code: 'ru',  label: 'Русский',   short: 'RU'  },
    { code: 'ar',  label: 'عربي',      short: 'عر'  },
    { code: 'es',  label: 'Español',   short: 'ES'  },
    { code: 'fr',  label: 'Français',  short: 'FR'  },
    { code: 'it',  label: 'Italiano',  short: 'IT'  },
    { code: 'de',  label: 'Deutsch',   short: 'DE'  },
    { code: 'zh',  label: '中文',      short: '中'   },
    { code: 'tr',  label: 'Türkçe',   short: 'TR'  },
  ];

  private storedScrollY = 0;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem('lang') as LangCode;
    if (saved && this.languages.find(l => l.code === saved)) this.language = saved;
    this.applyDir();
    this.scrolled = window.scrollY > 30;
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.unlockBody();
  }

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 30; }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.closeMenu();
    if (this.langOpen) this.langOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.lang-dropdown')) this.langOpen = false;
  }

  toggleMenu() { this.open ? this.closeMenu() : this.openMenu(); }

  private openMenu() {
    this.storedScrollY = window.scrollY;
    this.open = true;
    this.lockBody(this.storedScrollY);
  }

  closeMenu() {
    if (!this.open) return;
    this.open = false;
    this.unlockBody();
    window.scrollTo(0, this.storedScrollY);
  }

  private lockBody(y: number) {
    const b = document.body;
    b.style.position = 'fixed';
    b.style.top = `-${y}px`;
    b.style.left = '0';
    b.style.right = '0';
    b.style.width = '100%';
    b.classList.add('nav-open');
  }

  private unlockBody() {
    const b = document.body;
    b.style.position = '';
    b.style.top = '';
    b.style.left = '';
    b.style.right = '';
    b.style.width = '';
    b.classList.remove('nav-open');
  }

  setLanguage(lang: LangCode) {
    this.language = lang;
    this.langOpen = false;
    localStorage.setItem('lang', lang);
    this.applyDir();
    window.dispatchEvent(new CustomEvent('lang-change', { detail: lang }));
  }

  private applyDir() {
    document.documentElement.dir = this.language === 'ar' ? 'rtl' : 'ltr';
  }

  get currentLang(): LangOption {
    return this.languages.find(l => l.code === this.language) ?? this.languages[1];
  }

  get t() {
    const map: Record<LangCode, { home: string; tours: string; about: string; contact: string }> = {
      geo: { home: 'მთავარი',    tours: 'ტურები',   about: 'ჩვენ შესახებ', contact: 'კონტაქტი'  },
      en:  { home: 'Home',       tours: 'Tours',     about: 'About',         contact: 'Contact'    },
      ru:  { home: 'Главная',    tours: 'Туры',      about: 'О нас',         contact: 'Контакты'   },
      ar:  { home: 'الرئيسية',  tours: 'الجولات',   about: 'من نحن',        contact: 'اتصل بنا'  },
      es:  { home: 'Inicio',     tours: 'Tours',     about: 'Nosotros',      contact: 'Contacto'   },
      fr:  { home: 'Accueil',    tours: 'Tours',     about: 'À propos',      contact: 'Contact'    },
      it:  { home: 'Home',       tours: 'Tour',      about: 'Chi siamo',     contact: 'Contatti'   },
      de:  { home: 'Startseite', tours: 'Touren',    about: 'Über uns',      contact: 'Kontakt'    },
      zh:  { home: '首页',        tours: '旅游',      about: '关于我们',       contact: '联系我们'    },
      tr:  { home: 'Ana Sayfa',  tours: 'Turlar',    about: 'Hakkımızda',    contact: 'İletişim'   },
    };
    return map[this.language];
  }
}
