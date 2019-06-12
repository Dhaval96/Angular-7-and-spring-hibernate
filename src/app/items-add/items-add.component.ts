import { Component, OnInit } from '@angular/core';
import { UtlityService } from '../common/utlity-service.service';
import { DelegateService } from '../common/delega-service.service';

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.scss']
})
export class ItemsAddComponent implements OnInit {

  constructor(private utlityService: UtlityService, private delegateService: DelegateService) { }

  itemName;
  price;
  ngOnInit() {
  }

  save() {
    let restaurentDetail = JSON.parse(sessionStorage.getItem('restaurent'));
    let id = restaurentDetail['id'];

    let item = { itemName: this.itemName, price: this.price, restaurentId: id };

    this.delegateService.sendAndGet('/restaurent/saveItems', item).subscribe((res) => {
      console.log(res);
      if (res && res['code'] && res['code'] === 200) {
        this.utlityService.redirectTo('items/list');
        this.delegateService.decripter(res);
      }
    })
  }

}
