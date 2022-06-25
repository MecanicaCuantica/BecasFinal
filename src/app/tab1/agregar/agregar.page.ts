import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BecasService } from '../becas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private becaService: BecasService, private router: Router) { }

  ngOnInit() {
  }

  guardarBeca(categoria: HTMLInputElement, nombre: HTMLInputElement, porcentaje: HTMLInputElement, pais: HTMLInputElement, universidad: HTMLInputElement, requerimientos: HTMLInputElement){
    this.becaService.agregarBeca(categoria.value, nombre.value, porcentaje.value, pais.value, universidad.value, requerimientos.value,'0');
    this.router.navigate(['/tabs/tab1']);
    //console.log(categoria.value, nombre.value, porcentaje.value, pais.value, universidad.value, requerimientos.value)
  }
}
