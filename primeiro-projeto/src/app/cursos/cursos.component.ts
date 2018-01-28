import { Component, OnInit } from '@angular/core';
// Sempre que fazer algum método no service, tem que importar o service
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  // Caso o Html seja até 3 linhas, tira o Url do template 
  // coloca `` e o html dentro
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  // Nome da variável e o tipo
  nomePortal: string;
  cursos: string[];
  
  /* 
    Pode-se inicializar a string na declaração 
    da variável ou dentro do constructor 
  */
  // A variável cursosService é do tipo CursosService (classe)
  constructor(public cursosService : CursosService) {
    this.nomePortal = 'http://google.com.br';
    
    // for (let i=0; i < this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }
    
    // var servico = new CursosService();
    // this.cursosService = cursosService;
    
    this.cursos = this.cursosService.getCursos();



   }

  ngOnInit() {
  }

}
