import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginData = { correo:'', password:'' };
  message = '';
  data: any;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    //this.router.navigate ( [ '/dashboard' ] );
    this.http.post('/cliente/login', this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('cliente', this.data.sesion);
      this.router.navigate(['/dashboard/cliente']);
    }, err => {
      this.message = err.resp.msg;
    });
  }

}
