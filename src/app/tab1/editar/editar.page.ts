import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BecasService } from '../becas.service';
import { Beca } from '../beca.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  beca: Beca;

  constructor(private becaService: BecasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      //redirect
      const recipeId = paraMap.get('becaId')
      this.beca = this.becaService.consultarBeca(recipeId);
    })
  }

  actualizarBeca(categoria: HTMLInputElement, nombre: HTMLInputElement, porcentaje: HTMLInputElement, pais: HTMLInputElement, universidad: HTMLInputElement, requerimientos: HTMLInputElement,populariad: HTMLInputElement){
    this.becaService.editarBeca(this.beca.id, categoria.value, nombre.value, porcentaje.value, pais.value, universidad.value, requerimientos.value.toString(),populariad.value)
    this.router.navigate(['/tabs/tab1'])
  }
}
