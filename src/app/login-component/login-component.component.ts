import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtlityService } from '../common/utlity-service.service';
import { DelegateService } from '../common/delega-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  username;
  password;
  constructor(private utilityService: UtlityService, private delegateService: DelegateService) { }

  ngOnInit() {
  }

  redirecToDashBoard() {
    this.delegateService.testService();
    this.utilityService.redirectTo('dashboard');
  }

  registration() {
    this.utilityService.redirectTo('registration')
  }

  login() {
    sessionStorage.setItem('username',this.username);
    let json = { username: this.username, password: this.password };
    this.delegateService.sendAndGet('user/login', json).subscribe((res) => {
      console.log(res);
      if (res && res['code'] && res['code'] === 200) {
        this.utilityService.redirectTo('dashboard');
        this.delegateService.decripter(res);
      }
    })




  }
}

