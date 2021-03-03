import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {Entity} from "../models/entity.model";

const IP = environment.BACKEND_IP || '127.0.0.1'
const PORT = environment.BACKEND_PORT || '8888'
const BASE_URL = 'http://' + IP + ':' + PORT

const USER_ROUTE = BASE_URL + '/users'
const ENTITY_ROUTE = BASE_URL + '/entity'

const SIGNUP = USER_ROUTE + '/register'
const LOGIN = USER_ROUTE + '/authenticate'
const ADD_ENTITY = ENTITY_ROUTE + '/add'
const GET_ENTITY = ENTITY_ROUTE + '/get'
const GET_ENTITIES = ENTITY_ROUTE + '/get-all'

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
const options = {headers: headers};

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  constructor(private http: HttpClient) {
  }

  signup(user: User): Observable<any> {
    return this.http.post<any>(SIGNUP, user, options)
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(LOGIN, user, options)
  }

  addEntity(entity: Entity): Observable<any> {
    return this.http.post<any>(ADD_ENTITY, entity, options)
  }

  getEntity(entity: Entity): Observable<Entity> {
    return this.http.post<Entity>(GET_ENTITY, entity, options)
  }

  getAllEntites(): Observable<Entity[]> {
    return this.http.post<Entity[]>(GET_ENTITIES, {}, options)
  }
}
