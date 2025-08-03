import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './AppComponent/AppComponent.config';
import { AppComponent } from './AppComponent/AppComponent';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
