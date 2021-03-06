import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
