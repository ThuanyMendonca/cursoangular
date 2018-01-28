
import { NgModule } from '@angular/core';
// Não importa o browserModule aqui
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

// Importando os serviços
import { CursosService } from './cursos.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent,
    CursoDetalheComponent
  ],
  // Coloca os serviços fornecedores
  providers: [
    CursosService
  ]
})
export class CursosModule { }
