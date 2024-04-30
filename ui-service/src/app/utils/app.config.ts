import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { jwtInterceptor } from './jwt.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

import { provideAnimations } from '@angular/platform-browser/animations';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),
    importProvidersFrom(HttpClientModule,
      JwtModule.forRoot({
        config: {
            tokenGetter: tokenGetter,
            // allowedDomains: ["example.com"]
        },
    }),
    ),
    provideRouter(routes),
    provideAnimations()
  ]
};
