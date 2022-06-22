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

  constructor(private becaService: BecasService, private router: Router) {}

  ngOnInit() {
    this.becas = this.becaService.consultarBecas();
  }

  ionViewWillEnter(){
    this.becas = this.becaService.consultarBecas();
  }

  agregarBeca(){
    this.router.navigate(['/tabs/tab1/agregar']);
  }
}
