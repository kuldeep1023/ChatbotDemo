import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav(): void {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }
}
