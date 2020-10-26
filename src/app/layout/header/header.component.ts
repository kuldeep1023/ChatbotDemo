import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  openNav(): void {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }

  logout(): void {
    localStorage.removeItem('Email');
    this.router.navigate(['/login']);
  }

}
