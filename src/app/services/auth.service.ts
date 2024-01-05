import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn: boolean = false;

  login(loginId: string, password: string) {
    if (loginId === 'welcome@bmc' && password === 'bmc@2023') {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
