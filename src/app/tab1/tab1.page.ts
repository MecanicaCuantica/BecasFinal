import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BecasService } from './becas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  becas = []

  constructor(public becaService: BecasService, private router: Router) {}

  Sumar(becaId:string){
    
    var pos;
    pos = this.becaService.becas.map(function(e) { return e.id; }).indexOf(becaId);
    var aux = this.becaService.becas[pos]
    console.log(aux)
    aux.populariad = (parseInt(aux.populariad)+1).toString();
    this.becaService.becas[pos] = aux;
    console.log( this.becaService.becas[pos])
  }

  ngOnInit() {
    this.becas = this.becaService.consultarBecas()
  }

  ionViewWillEnter(){
   this.becas = this.becaService.consultarBecas();
  }

  agregarBeca(){
    this.router.navigate(['/tabs/tab1/agregar']);
  }

  salir(){
    this.router.navigate(['/login']);
  }
}
