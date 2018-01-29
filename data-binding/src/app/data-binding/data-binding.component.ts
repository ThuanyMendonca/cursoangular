import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // Aqui está apontando para o css desse component
  styleUrls: ['./data-binding.component.css'],
  // Pode fazer o style inline ()
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold; 
  }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  // A declaração da variável como string é opcional
  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/g/400/200/nature/';
  cursoAngular = true;
  valorAtual = '';
  valorSalvo;
  isMouseOver = false;
  
  // Métodos
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

  // Evento click
  botaoClicado(){
    alert('Botão clicado !');

  }
  // Lendo o que está sendo digitado no input
  onKeyUp(evento: KeyboardEvent){
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  //Salvando valor ao apertar enter
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  // Passar o mouse
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit() {
  }

}
