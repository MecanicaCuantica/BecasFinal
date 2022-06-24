import { Injectable } from '@angular/core';
import {Beca} from "./beca.model"

@Injectable({
  providedIn: 'root'
})
export class BecasService {

  private becas: Beca[] = [
    {
      id: '1',
      categoria: 'Nacional',
      nombre: 'Jovenes',
      porcentajeFinancia: '50',
      pais: 'Colombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5'
    },
    {
      id: '2',
      categoria: 'Internacional',
      nombre: 'Extranjeros',
      porcentajeFinancia: '30',
      pais: 'Canada',
      universidad: 'Ottawa',
      requerimientos: 'Vivir en Canada, Hablar "canadience" xD'
    },
    {
      id: '3',
      categoria: 'Internacional',
      nombre: 'Viejos',
      porcentajeFinancia: '40',
      pais: 'Polombia',
      universidad: 'Valle',
      requerimientos: 'Estar matriculado, Promedio superior a 3.5'
    },
  ]

  constructor() { }

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

  agregarBeca(categoria: string, nombre: string, porcentajeFinancia: string, pais: string, universidad: string, requerimientos: string) {
    this.becas.push({
      id: this.becas.length + 1 + "",
      categoria,
      nombre,
      porcentajeFinancia,
      pais,
      universidad,
      requerimientos
    });
  }

  editarBeca(id: string, categoria: string, nombre: string, porcentajeFinancia: string, pais: string, universidad: string, requerimientos: string){
    this.eliminarBeca(id)

    this.becas.push({
      id,
      categoria,
      nombre,
      porcentajeFinancia,
      pais,
      universidad,
      requerimientos
    })
  }

  eliminarBeca(becaId: string) {
    this.becas = this.becas.filter(beca =>{
      return beca.id !== becaId
    })
  }
}
