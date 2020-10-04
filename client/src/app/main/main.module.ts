import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MainComponent} from './main.component';
import {EventsComponent} from './pages/events/events.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MAT_MODULES} from './mat-modules';
import {EventDetailsComponent} from './pages/event-details/event-details.component';
import {APP_LANG, LANG_TOKEN} from './constants/constants';


export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const currLang = localStorage.getItem(LANG_TOKEN) || APP_LANG.DE;

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ...MAT_MODULES,
    SharedModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: currLang,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ]
})
export class MainModule {
}
