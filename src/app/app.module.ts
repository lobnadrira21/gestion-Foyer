import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Importez FormsModule ici
import { CommonModule } from '@angular/common';  // Importez CommonModule ici
import { provideHttpClient } from '@angular/common/http'; // Utilisez provideHttpClient

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,  // Ajoutez FormsModule
  ],
  providers: [
    provideHttpClient()  // Ajoutez provideHttpClient dans providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
