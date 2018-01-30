import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
  // Declaração de variáveis
  @Input() valor = 10;
  
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;


  // Métodos
  incrementa(){
    
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor}); 
    
  }
  decrementa(){
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor}); 
  }



  constructor() { }

  ngOnInit() {
  }

}
