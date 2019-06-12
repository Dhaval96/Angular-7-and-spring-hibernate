import { Component, OnInit } from '@angular/core';
import { DelegateService } from '../common/delega-service.service';
import { UtlityService } from '../common/utlity-service.service';

@Component({
  selector: 'app-regisration',
  templateUrl: './regisration.component.html',
  styleUrls: ['./regisration.component.scss']
})
export class RegisrationComponent implements OnInit {

  username;
  password;

  constructor(private delegateService: DelegateService, private utilityService: UtlityService) { }

  ngOnInit() {
  }

  registration() {
    const json = { username: this.username, password: this.password };
    this.delegateService.sendAndGet('user/registration', json).subscribe((res) => {
      if (res.code === 200) {
        this.utilityService.redirectTo('')
      }
      this.delegateService.decripter(res);
    });

  }

}
