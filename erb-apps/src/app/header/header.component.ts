import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal/modal.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private modalService: ModalService) {}

  goHome() {
    this.router.navigate(['blog']);
  }

  goToDownloads() {
    this.router.navigate(['downloads']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  logIn() {
    this.modalService.init(LoginComponent, {}, {});
  }
}
