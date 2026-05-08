import { Injectable, signal } from '@angular/core';

export type LangCode = 'en' | 'geo' | 'ru' | 'ar' | 'es' | 'fr' | 'it' | 'de' | 'zh' | 'tr';

const VALID: LangCode[] = ['en', 'geo', 'ru', 'ar', 'es', 'fr', 'it', 'de', 'zh', 'tr'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<LangCode>(this.getSaved());
  readonly lang = this._lang.asReadonly();

  private getSaved(): LangCode {
    try {
      const s = localStorage.getItem('lang') as LangCode;
      return VALID.includes(s) ? s : 'en';
    } catch {
      return 'en';
    }
  }

  set(lang: LangCode): void {
    this._lang.set(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
