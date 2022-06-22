import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Beca } from '../tab1/beca.model';
import { BecasService } from '../tab1/becas.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
})
export class ConsultarPage implements OnInit {

  beca: Beca;

  constructor(private activatedRoute: ActivatedRoute, private becaService: BecasService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      //redirect
      const recipeId = paraMap.get('becaId')
      this.beca = this.becaService.consultarBeca(recipeId)
      console.log(this.beca)
    })
  }

  eliminarBeca(){
    this.becaService.eliminarBeca(this.beca.id)
    this.router.navigate(['/tabs/tab1'])
  }

}
