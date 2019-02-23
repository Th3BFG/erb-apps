import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly API_URL: string;

  constructor(private modalService: ModalService, private userService: UserService) { }

  ngOnInit(): void {}

  submit(username: string, password: string): void {
    // TODO: determine device id
    const deviceId = 'wompo-pc';
    const creds = { un: username, pw: password, id: deviceId };
    this.userService.login(creds).subscribe(o => this.disposeAndRefresh());
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
