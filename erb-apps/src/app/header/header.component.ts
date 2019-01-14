import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  subtitle = 'Down To Earth Solutions';
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['blog']);
  }
  goToDownloads() {
    this.router.navigate(['downloads']);
  }
  goToAbout() {
    this.router.navigate(['about']);
  }
}
