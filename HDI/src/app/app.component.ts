import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app for my fucking ass';
  
  private items: MenuItem[];

  ngOnInit() {
    this.items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'fa-plus'},
            {label: 'Open', icon: 'fa-download'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'fa-refresh'},
            {label: 'Redo', icon: 'fa-repeat'}
        ]
    }];
}
}
