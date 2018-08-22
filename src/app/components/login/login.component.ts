import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LogueoService } from '../../services/logueo.service';
import { GlobalService } from '../../services/globales.service';
import { BdService } from '../../services/bd.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    public build: FormBuilder,
    public globalSer: GlobalService,
    public db: BdService,
    public logueoSer: LogueoService,
    public snackBar: MatSnackBar
  ) {
    this.formLogin = build.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  public logueo() {
    const user = `${this.formLogin.get('user').value}@gmail.com`;
    const pass = this.formLogin.get('password').value;
      this.logueoSer.loginUser(user.toLowerCase(), pass)
      .then(() => {
        // let id = this.logueoSer.uid.uid;
        // if (id=='gAiVRPn475QifdP7CgHOni8ezMs1') {
        //   this.getToken();
        //   let cargar = this.loading.create({
        //     content: "Cargando Espere...",
        //     duration: 4000
        //   });
        //   cargar.present().then(()=>{
        //     setTimeout(() => {
        //       // this.navCtrl.setRoot(MenuPage);
        //       cargar.dismiss();
        //     }, 5000);
        //   });
        // } else {
        //   this.mensajeToast('Este usuario no puede ingresar en esta app',2);
        //   this.logueoSer.cerrarSesion();
        // }
        this.snackBar.open('Ha iniciado sesion', 'ok', {
          duration: 1000,
        });
      })
      .catch(() => {
        this.snackBar.open('Error', 'ok', {
          duration: 1000,
        });
      });
  }

  click() {
    console.log('cambiar contraseña');
  }

}
