import { Injectable } from '@angular/core';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor() {
    i18next
      .use(HttpApi)
      .use(LanguageDetector)
      .init({
        lng: 'en', // Default language
        fallbackLng: 'en',
        debug: true,
        backend: {
          loadPath: 'assets/i18n/{{lng}}.json', // Path to translation files
        },
      });
  }

  t(key: string): string {
    return i18next.t(key);
  }

  changeLanguage(lang: string): void {
    i18next.changeLanguage(lang);
  }
}
