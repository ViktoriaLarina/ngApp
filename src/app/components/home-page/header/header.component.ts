import {Component, OnInit} from '@angular/core';
import {Routs} from '@utils/enums/routs';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homePath: string;

  constructor(private service: AuthService) {
  }

  ngOnInit() {
    this.homePath = Routs.HOME.toString();
  }

  logout(): void {
    this.service.removeLogin();
  }

}
