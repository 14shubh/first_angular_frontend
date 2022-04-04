import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  CategoryList:any = '';
  constructor( private _category:CategoryService) {
   
  };

  public deleteCategory(categoryId:string){
    this._category.removeCategory(categoryId).subscribe(data=>{
      if(data){
        this.ngOnInit();
      }else{
        alert("can not be deleted");
      }
    })
  }

  ngOnInit(): void {
    this._category.viewCategory().subscribe(data=>{
      this.CategoryList = data;
    });
  }

}
