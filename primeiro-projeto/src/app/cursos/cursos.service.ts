import { Injectable } from '@angular/core';

// Injectable -> possui métodos que vão realizar alguma lógica
// Injeção de dependencias pelo constructor(Angular)/set
@Injectable()
export class CursosService {
  // http   
  constructor() { }
  getCursos(){
    return ['Java','Python','C++']
  }
}
