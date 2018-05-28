  
import {OnInit, Component, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuService} from './menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  //providers: [MenuService],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() toggleNotificationSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
