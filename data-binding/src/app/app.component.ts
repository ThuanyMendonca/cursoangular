import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variaveis
  valor = 5;
  deletarCiclo = false;
  // métodos
  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}
