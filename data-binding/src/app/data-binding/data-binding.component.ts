import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  // A declaração da variável como string é opcional
  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/g/400/200/nature/';
  cursoAngular = true;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    if(this.cursoAngular == true){
      return 'Curti o curso';
    }
    else {
      return 'Não curti'
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
