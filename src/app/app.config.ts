import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes)
    )
    // ... any additional providers
  ],
};
