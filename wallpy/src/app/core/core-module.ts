// src/app/app/core/core.module.ts
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firebaseProviders } from './firebase.config';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpClient] },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    ...firebaseProviders, // 👈 aquí, no en imports
  ],
})
export class CoreModule {}
