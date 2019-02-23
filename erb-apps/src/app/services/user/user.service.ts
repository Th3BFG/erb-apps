import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Credentials } from '../../models/credentials';
import { User } from '../../models/user';

@Injectable()
export class UserService {
  readonly API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  login(creds: Credentials): Observable<string> {
    return this.http.post<string>(`${this.API_URL}/users`, creds);
  }

}
