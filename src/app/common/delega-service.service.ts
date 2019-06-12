import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Injectable()

export class DelegateService implements OnInit {
  localhost = 'http://localhost:8080/springecommerce/';
  ngOnInit(): void {
  }

  responseObject: Observable<any>
  notificationObject;
  constructor(private _http: Http, private toastr: ToastrService) { }

  testService() {
    this._http.get('http://localhost:8080/springecommerce/api/save').subscribe((res) => {
      console.log('send');
    });
  }

  sendAndGet(url, json): Observable<any> {
    return this._http.post(this.localhost + url, json).pipe(map(res => res.json()))


    //return this.responseObject;
  }

  fetchData(url) {
    return this._http.post(this.localhost + url,'').pipe(map(res => res.json()))

  }


  private errorhandler(error: Response) {
    return Observable.throw(error);
  }



  public decripter(res) {
    let code = res.code
    let description = res.description
    this.showNotification(code, description);
  }



  showNotification(statuscode, description) {

    // const color = Math.floor((Math.random() * 5) + 1);

    switch (statuscode) {
      case 1:
        this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        break;
      case 200: case 201:
        this.toastr.success(description, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        break;
      case 204: case 206:
        this.toastr.warning(description, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        break;
      case 400: case 404: case 405: case 409:
        this.toastr.error(description, '', {
          timeOut: 8000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        break;
      case 5:
        this.toastr.show(description, '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        break;
      default:
        break;
    }
  }
}
