import { Component, OnInit, Inject, NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { log } from 'util';

@Component({
  selector: 'app-cotiza',
  templateUrl: './cotiza.component.html',
  styleUrls: ['./cotiza.component.scss']
})
export class CotizaComponent implements OnInit {

  autos: any;
  models: any;
  years: any;

  selectedValue: string;
  animal: string;
  name = "";
  modelo: string;


  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() { // autos 
    this.selectedValue = "";

    this.http.get('/cliente/auto').subscribe(dato => {
      this.autos = dato;  
    }, err => {
      console.log('some erro on the sisteme: ' + err );
      
    });
  }

  onClick(event){ // sibstraccion el modelo de los autos
    console.log(event); 
    let id = event;

    this.http.get('/cliente/auto/' + id).subscribe(dato => {
      this.models = dato;
    }, err => {
      console.log('some erros: ' + err);
      
    })

  }

  onyear(event){ // subtraccion de los años de los autos
    let idmodel = event;
    console.log(idmodel);
    
    this.http.get('/cliente/model/' + idmodel).subscribe(dato => {
      this.years = dato;
    }, err => { console.log('erro bitch: ' + err);

    })
  }
 
  //generar precio y posiblemente email
  cotiza(){

    let dialogRef = this.dialog.open(DialogOverview, {
      width: '450px',
      data: {name: this.name, model: this.modelo}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('modal cerrado');
      this.animal = result;
    });
  }

  } // end of my component


@Component({ // se agrega a entycomponent en el modulo 
  selector: 'precio',
  templateUrl: './precio.html',// el dialogo que presentara 
})
export class DialogOverview{

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
