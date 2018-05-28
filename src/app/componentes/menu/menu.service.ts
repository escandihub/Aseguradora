import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export interface BadgeItem {
    type: string;
    value: string;
  }
  
  export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
  }

 
  
  
  export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: ChildrenItems[];
    tipo: string;

  }

  //listamos el aregolod de 
  const MENUITEMS = [
    {
        state: '/',
        name: 'home',
        type: 'link',
        icon: 'explore',
        tipo: 'agente'
    }

  ]

  @Injectable()
export class MenuService  implements OnInit{
    UTipo: any;
 constructor( private http: HttpClient) {}
 ngOnInit(){
     let httpOptions = {
         
     }
 }
 Ontipo(){
     this.http.get('/personal/tipo').subscribe(Utipo => {
        this.UTipo = Utipo;
        console.log(this.UTipo);
        
     })
 }
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
