import { Component, OnInit } from '@angular/core';
import { UtlityService } from '../common/utlity-service.service';
import { DelegateService } from '../common/delega-service.service';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.scss']
})
export class RestaurentListComponent implements OnInit {

  constructor(private utilityService: UtlityService, private delegate: DelegateService) { }
  restaurent = new Array();

  ngOnInit() {
    this.delegate.fetchData('restaurent/getAll').subscribe(res => {
      console.log(res);
      this.restaurent = res.data;
      console.log(this.restaurent);
    });
  }

  redirectToCreateRestaurent() {
    this.utilityService.redirectTo('restaurent/add')
  }

}
