import { ApplicationConfig } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
