import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  add_url = "https://angular-first-api.herokuapp.com/category/add-category"
  view_url = "https://angular-first-api.herokuapp.com/category/view-category"
  delete_url = "https://angular-first-api.herokuapp.com/category/delete-category"


  constructor(private _http:HttpClient) { }

  addCategory(fd:any){
    return this._http.post(this.add_url,fd);
  }

  viewCategory(){
    return this._http.get(this.view_url);
  }

  public removeCategory(Category_id:any){
    // alert(Category_id);
    return this._http.post(this.delete_url,Category_id);
  }
}

