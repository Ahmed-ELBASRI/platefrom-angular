import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { SaleOfferComponent } from './sale-offer/sale-offer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BottomFooterComponent,
    SaleOfferComponent
  ]
})
export class SharedModule { }
