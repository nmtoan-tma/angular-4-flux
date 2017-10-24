import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppSettings } from './constants/AppSettings';

if (AppSettings.ENVIRONMENT === 'prod') {
    enableProdMode();
}

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
