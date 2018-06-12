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

  precio: number;
  animal: string;
  name = "";
  modelo: string;
  year: number;
  theme = "color4"


  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() { // autos 

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

    this.backgroundChange();

  }

  onyear(event){ // subtraccion de los años de los autos
    let idmodel = event;
    console.log(idmodel);
    
    this.http.get('/cliente/model/' + idmodel).subscribe(dato => {
      this.years = dato;
    }, err => { console.log('erro bitch: ' + err);

    })
  }

backgroundChange(){//aqui pondras sentencias para cambiar el color o imagen
  if(this.name === "Audi"){ this.theme = "color2";}
  else if(this.name === "Bentley"){this.theme = "color4";}
}
 
  //generar precio y posiblemente email

  toPay(){
    if(this.year < 2000){return 1500;}
    else if(this.year >=  2000 && this.year < 2005 ){ return 2500; }
    else if(this.year  >= 2005 && this.year < 2012){ return 2700; }
    else if(this.year >= 2012 && this.year < 2018){ return 3000;}
  }
  
  cotiza(){

    let dialogRef = this.dialog.open(DialogOverview, {
      width: '450px',
      data: {name: this.name, model: this.modelo, precio: this.toPay()}
      
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
