import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponentComponent } from './cart-component/cart-component.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
