import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LogueoService } from '../../services/logueo.service';
import { GlobalService } from '../../services/globales.service';
import { BdService } from '../../services/bd.service';
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
    public logueoSer: LogueoService
  ) {
    this.formLogin = build.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

}
