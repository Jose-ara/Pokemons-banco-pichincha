import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalConfirmComponent } from './share/modal-confirm/modal-confirm.component';
import { ModalEdithCreateComponent } from './pages/modal-edith-create/modal-edith-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalConfirmComponent,
    ModalEdithCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
