import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Routs} from '@utils/enums/routs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  saveLogin(login: string): void {
    localStorage.setItem('login', login);
    this.changeRout(`/${Routs.HOME}`);
  }

  removeLogin(): void {
    if (localStorage.getItem('login')) {
      localStorage.removeItem('login');
      this.changeRout(`/${Routs.LOGIN}`);
    }
  }

  private changeRout(rout: string): void {
    this.router.navigate([rout]);
  }
}
