import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beca } from '../tab1/beca.model';
import { BecasService } from '../tab1/becas.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
})
export class ConsultarPage implements OnInit {

  beca: Beca;

  constructor(private activatedRoute: ActivatedRoute, private becaService: BecasService,
    private router: Router, private alerctr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      //redirect
      const recipeId = paraMap.get('becaId')
      this.beca = this.becaService.consultarBeca(recipeId);
    })
  }

  async eliminarBeca(){
    const alertElement = await this.alerctr.create({
      header: 'Eliminar beca ' + this.beca.nombre,
      message: 'Esta seguro que desa eliminar la beca: '+ this.beca.nombre,
      buttons:[
        {
          text: 'Cancelar',
          role: 'Cancelar'
        },
        {
          text: 'Eliminar',
          handler:() =>{
            this.becaService.eliminarBeca(this.beca.id);
            this.router.navigate(['/tabs/tab1']);
          }
        }
      ]
    });
    await alertElement.present();
  }
}
