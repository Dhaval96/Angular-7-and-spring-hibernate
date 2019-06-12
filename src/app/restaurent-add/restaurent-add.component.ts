import { Component, OnInit } from '@angular/core';
import { RestaurentPOJO } from '../common/RestaurentPOJO';
import { DelegateService } from '../common/delega-service.service';
import { UtlityService } from '../common/utlity-service.service';

@Component({
  selector: 'app-restaurent-add',
  templateUrl: './restaurent-add.component.html',
  styleUrls: ['./restaurent-add.component.scss']
})
export class RestaurentAddComponent implements OnInit {

  constructor(private delegate: DelegateService,
    private utilityService: UtlityService) { }

  restaurentName;
  phoneNo;
  pincode;
  address;
  emailId;
  ownerName;
  password;
  city;
  country;
  username;
  restaurent: RestaurentPOJO;
  ngOnInit() {
  }

  saveRestaurent() {
    let restaurent = {
      restaurentName: this.restaurentName,
      phoneNo: this.phoneNo,
      pincode: this.pincode,
      address: this.address,
      emailId: this.emailId,
      ownerName: this.ownerName,
      password: this.password,
      city: this.city,
      country: this.country,
      username: this.username
    }

    this.delegate.sendAndGet('restaurent/save', restaurent).subscribe((res) => {
      if (res.code === 200) {
        this.utilityService.redirectTo('restaurent/list')
      }
      this.delegate.decripter(res);
    })
  }


}
