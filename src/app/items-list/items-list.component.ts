import { Component, OnInit, TemplateRef } from '@angular/core';
import { DelegateService } from '../common/delega-service.service';
import { UtlityService } from '../common/utlity-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal/public_api';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(private delegateService: DelegateService, private utilyService: UtlityService) { }

  items = new Array();
 
  ngOnInit() {
    this.delegateService.fetchData('/restaurent/getAllItems').subscribe(res => {
      console.log(res);
      this.items = res.data;
      console.log(this.items);
    })
  }

  redirectToItemsAdd() {
    this.utilyService.redirectTo('items/add');
  }
}
