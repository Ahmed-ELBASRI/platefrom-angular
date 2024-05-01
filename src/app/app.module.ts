import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PerformanceComponent } from './home/performance/performance.component';
import { SupportComponent } from './home/support/support.component';
import { ServicesComponent } from './home/services/services.component';
import { ServiceItemComponent } from './home/services/service-item/service-item.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BreadcrumbComponent } from './all-products/breadcrumb/breadcrumb.component';
import { ProductsComponent } from './all-products/products/products.component';
import { FiltersComponent } from './all-products/products/filters/filters.component';
import { CategoryComponent } from './all-products/products/filters/category/category.component';
import { RatingComponent } from './all-products/products/filters/rating/rating.component';
import { DateUpdatedComponent } from './all-products/products/filters/date-updated/date-updated.component';
import { CategoryItemComponent } from './all-products/products/filters/category/category-item/category-item.component';
import { DateUpdatedItemComponent } from './all-products/products/filters/date-updated/date-updated-item/date-updated-item.component';
import { RatingItemComponent } from './all-products/products/filters/rating/rating-item/rating-item.component';
import { ProductsItemComponent } from './all-products/products/products-item/products-item.component';
import { NavbarComponent } from './all-products/products/navbar/navbar.component';
import { PageNavigationComponent } from './all-products/products/page-navigation/page-navigation.component';
import { FilterComponent } from './all-products/products/filters/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    PerformanceComponent,
    SupportComponent,
    ServicesComponent,
    ServiceItemComponent,
    AllProductsComponent,
    BreadcrumbComponent,
    ProductsComponent,
    FiltersComponent,
    CategoryComponent,
    RatingComponent,
    DateUpdatedComponent,
    CategoryItemComponent,
    DateUpdatedItemComponent,
    RatingItemComponent,
    ProductsItemComponent,
    NavbarComponent,
    PageNavigationComponent,
    FilterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
