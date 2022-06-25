import { Injectable } from '@angular/core';
import {Beca} from "./beca.model"

@Injectable({
  providedIn: 'root'
})
export class BecasService {

  
  public becas: Beca[] = [
    {
      id: '1',
      categoria: 'Nacional',
      nombre: 'Jovenes',
      porcentajeFinancia: '50',
      pais: 'Colombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5',
      populariad: '15'
    },
    {
      id: '2',
      categoria: 'Internacional',
      nombre: 'Extranjeros',
      porcentajeFinancia: '30',
      pais: 'Canada',
      universidad: 'Ottawa',
      requerimientos: 'Vivir en Canada, Hablar "canadience" xD',
      populariad: '10'
    },
    {
      id: '3',
      categoria: 'Internacional',
      nombre: 'Viejos',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5',
      populariad: '6'
    },
    {
      id: '4',
      categoria: 'Internacional',
      nombre: 'Chicago',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5',
      populariad: '4'
    },
    {
      id: '5',
      categoria: 'Internacional',
      nombre: 'Cambridge',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5',
      populariad: '9'
    },
    {
      id: '6',
      categoria: 'Nacional',
      nombre: 'Vagos',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3',
      populariad: '8'
    },
    {
      id: '7',
      categoria: 'Nacional',
      nombre: 'Toluca',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3',
      populariad: '20'
    },
  ]

  constructor() { 
   
  }


  consultarBecas() {
    return [...this.becas]
  }

  consultarBeca(becaId: string) {

   

    
    return{
      ...this.becas.find(beca =>{
        return beca.id === becaId
      })
    }
  }
  consultartop5(){
    var becaaux = this.becas
    becaaux.sort(function (a, b) {
      if (a.populariad > b.populariad) {
        return 1;
      }
      if (a.populariad < b.populariad) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return becaaux
  }

  agregarBeca(categoria: string, nombre: string, porcentajeFinancia: string, pais: string, universidad: string, requerimientos: string,populariad: string) {
    this.becas.push({
      id: this.becas.length + 1 + "",
      categoria,
      nombre,
      porcentajeFinancia,
      pais,
      universidad,
      requerimientos,
      populariad
    });
  }

  editarBeca(id: string, categoria: string, nombre: string, porcentajeFinancia: string, pais: string, universidad: string, requerimientos: string,populariad: string){
    this.eliminarBeca(id)

    this.becas.push({
      id,
      categoria,
      nombre,
      porcentajeFinancia,
      pais,
      universidad,
      requerimientos,
      populariad
    })
  }

  eliminarBeca(becaId: string) {
    this.becas = this.becas.filter(beca =>{
      return beca.id !== becaId
    })
  }
}
