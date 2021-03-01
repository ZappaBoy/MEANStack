import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

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

  signup(username: string, password: string) {
    let body = {
      'username': username,
      'password': password
    }

    return this.http.post(SIGNUP, body, options)
      .subscribe(
        (data) => {
          return true
        },
        (error) => {
          return false
        }
      )

  }
}
