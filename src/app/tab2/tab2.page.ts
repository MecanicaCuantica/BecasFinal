import { Component } from '@angular/core';
import { BecasService } from '../tab1/becas.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   becas = []
  constructor(public becaService: BecasService) {
  }
  ionViewWillEnter(){
    console.log(this.becaService.becas)
    var bequinhas =this.becaService.becas;
    bequinhas = bequinhas.sort(function (a, b) {
      if (parseInt(a.populariad)<parseInt( b.populariad)  ){
        return 1;
      }
      if (parseInt(a.populariad) > parseInt(b.populariad) ) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    console.log(bequinhas)
    this.becas = bequinhas
  }
}
