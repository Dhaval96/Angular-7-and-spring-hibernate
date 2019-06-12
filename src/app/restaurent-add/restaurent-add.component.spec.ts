import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentAddComponent } from './restaurent-add.component';

describe('RestaurentAddComponent', () => {
  let component: RestaurentAddComponent;
  let fixture: ComponentFixture<RestaurentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
