import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

const IP = environment.BACKEND_IP || '127.0.0.1'
const PORT = environment.BACKEND_PORT || '8888'
const BASE_URL = 'http://' + IP + ':' + PORT

const USER_ROUTE = BASE_URL + '/users'

const SIGNUP = USER_ROUTE + '/register'

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
const options = {headers: headers};

@Injectable({
  providedIn: 'root'
})

export class UserAccessService {
  constructor(private http: HttpClient) {
  }

  signup(user: User): Observable<any> {
    let body = {
      'username': user.username,
      'password': user.password
    }

    return this.http.post<any>(SIGNUP, body, options)
  }
}
