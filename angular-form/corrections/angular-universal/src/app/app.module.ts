import { WindowModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    WindowModule
  ],
  providers: []
})
export class AppModule { }
