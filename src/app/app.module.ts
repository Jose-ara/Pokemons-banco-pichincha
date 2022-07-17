import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { EdithPokemonComponent } from './components/modals/edith-pokemon/edith-pokemon.component';
import { CreatePokemonComponent } from './components/modals/create-pokemon/create-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmDeleteComponent,
    EdithPokemonComponent,
    CreatePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
