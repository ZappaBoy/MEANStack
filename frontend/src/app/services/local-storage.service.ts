import {Injectable} from '@angular/core';

const AUTH_STATUS = 'AUTH_STATUS'
const LOGGED = 'LOGGED'
const LOGGED_OUT = 'LOGGED_OUT'

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {
  }

  public setLoggedStatus(): void {
    sessionStorage.setItem(AUTH_STATUS, LOGGED)
  }

  public setLoggedOutStatus(): void {
    sessionStorage.setItem(AUTH_STATUS, LOGGED_OUT)
  }

  public getAuthStatus(): boolean {
    status = sessionStorage.getItem(AUTH_STATUS)
    return status == LOGGED
  }
}
