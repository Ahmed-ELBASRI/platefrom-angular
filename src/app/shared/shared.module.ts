import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { SaleOfferComponent } from './sale-offer/sale-offer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent
  ]
})
export class SharedModule { }
