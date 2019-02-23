import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {}

  submit(subject: string, body: string): void {
    console.log('submit');
  }

  cancel(): void {
    this.modalService.dispose();
  }

  disposeAndRefresh(): void {
    this.modalService.dispose();
    // TODO: Get better method of refreshing posts.
    // this.router.navigate(['blog'])
  }
}
