import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showHomePage: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoRegister() {
    this.showHomePage = false;
  }
}
