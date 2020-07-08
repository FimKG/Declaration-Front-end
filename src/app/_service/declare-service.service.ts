import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Declare_Service {
  PostItem(studentData: { serialNum: string; userID: string; firstName: string; lastName: string; phone: string; itemDescription: string; itemType: string; itemBrand: string; }) {
    throw new Error("Method not implemented.");
  }
  _Url = "http://localhost:8080/";
  // declareItems = "http://172.17.163.193:8080/addItems";

  constructor(private http: HttpClient) { }

  RegisterStaff(user) {
    return this.http.post<any>(this._Url + "addUser",user, {});
  }


  declare(declare_items) {
    return this.http.post<any>(this._Url + "addItems", { declare_items })
  }

  admin_Login(admin_id, admin_pass) {
    return this.http.post<any>(this._Url + "admins", { admin_id, admin_pass })
  }

  get_declared_Item() {
    return this.http.get<any>(this._Url + "GetAll");

  }

  get_item_cat() {
    return this.http.get<any>(this._Url + "itemsCart");
  }

  public getCategoryData(){
    return this.http.get<any>(this._Url + 'category')
  }

  


}
