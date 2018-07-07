import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/umd';

/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {
  baseUrl: any;
  constructor(public http: Http, public toast: ToastController) {
    this.baseUrl = 'http://localhost/combindrestapi/';
  }
  postData(objdata, segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      headers.append('Content-Type', 'application/json');
      this.http.post(this.baseUrl + segment, JSON.stringify(objdata), { headers: headers }).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        if (err.status == 0) {
          this.toast.create({
            message: 'มีข้อผิดพลาดติดต่อ API ไม่ได้',
            duration:3000
          }).present();
        } 
          reject(err);
      });
    });
  }
  getData(segment) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
      headers.append('Content-Type', 'application/json');
      this.http.get(this.baseUrl + segment, { headers: headers }).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        if (err.status == 0) {
          this.toast.create({
            message: 'มีข้อผิดพลาดติดต่อ API ไม่ได้',
            duration:3000
          }).present();
        } 
          reject(err);
      });
    });
  }
}
