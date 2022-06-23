import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertElement: AlertController, public navCtr: NavController) {

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    });

  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('ingresado');
      this.navCtr.navigateRoot('tabs');
    }
    else{
      const alert = await this.alertElement.create({
        header:'Datos incorrectos',
        message: 'los datos ingresados del usuario son incorrectos',
        buttons:['Aceptar']
      });
      await alert.present();
    }

  }
}
