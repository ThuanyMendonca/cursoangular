import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Importando meus componentes
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module'

@NgModule({
  // Coloca os componentes
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    // Coloca os modulos
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  // Coloca os serviços disponiveis para todos componentes que esta aqui
  providers: [],
  // Componente que serve como container - apenas no module raiz
  bootstrap: [AppComponent]
})
export class AppModule { }
