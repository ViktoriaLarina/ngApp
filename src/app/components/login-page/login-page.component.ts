import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegExpData} from '@utils/reqexp';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(private service: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.pattern(RegExpData.NAME_VALIDATOR)
      ])
    });
  }

  checkForm(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control.markAsTouched();
      control.markAsDirty();
    });
    if (!this.loginForm.valid) {
      return;
    }
    this.service.saveLogin(this.loginForm.controls['login'].value);
  }

}
