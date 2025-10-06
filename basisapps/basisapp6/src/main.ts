import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNlBE from '@angular/common/locales/nl-BE';

registerLocaleData(localeNlBE);

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers ?? []), { provide: LOCALE_ID, useValue: 'nl-BE' }],
}).catch((err) => console.error(err));
