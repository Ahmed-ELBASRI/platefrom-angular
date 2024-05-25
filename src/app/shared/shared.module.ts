import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { SaleOfferComponent } from './sale-offer/sale-offer.component';
import { AppRoutingModule } from '../app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {RouterModule} from "@angular/router";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent,
  ],
    imports: [
      RouterModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent
  ]
})
export class SharedModule { }
