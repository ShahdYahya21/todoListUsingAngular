import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './AppComponent/AppComponent.config';
import { App } from './AppComponent/AppComponent';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
