import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';

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
  language: 'en' | 'geo' | 'ru' = 'en';

  private storedScrollY = 0;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem('lang') as 'en' | 'geo' | 'ru';
    if (saved) this.language = saved;

    this.scrolled = window.scrollY > 30;

    // close drawer on every route change
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.unlockBody();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 30;
  }

  @HostListener('document:keydown.escape')
  onEsc() { if (this.open) this.closeMenu(); }

  toggleMenu() {
    this.open ? this.closeMenu() : this.openMenu();
  }

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

  /** Bulletproof scroll-lock that survives mobile Safari and address-bar resize. */
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

  setLanguage(lang: 'en' | 'geo' | 'ru') {
    this.language = lang;
    localStorage.setItem('lang', lang);
    window.dispatchEvent(new CustomEvent('lang-change', { detail: lang }));
  }

  get t() {
    const map = {
      en:  { home: 'Home',     tours: 'Tours',   about: 'About',         contact: 'Contact'  },
      geo: { home: 'მთავარი',   tours: 'ტურები',  about: 'ჩვენ შესახებ',  contact: 'კონტაქტი' },
      ru:  { home: 'Главная',  tours: 'Туры',    about: 'О нас',         contact: 'Контакты' }
    } as const;
    return map[this.language];
  }
}