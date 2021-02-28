import {Injectable} from '@angular/core';

const AUTH_STATUS = 'AUTH_STATUS'

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {
  }

  public setAuthStatus(status: boolean): void {
    sessionStorage.setItem(AUTH_STATUS, JSON.stringify(status));
  }

  public getAuthStatus(): boolean {
    status = JSON.parse(sessionStorage.getItem(AUTH_STATUS))
    return status == 'true';
  }
}
