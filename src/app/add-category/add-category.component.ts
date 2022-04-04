import { Component, OnInit } from '@angular/core';

import{CategoryService} from '../category.service'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryName:any="";
  image:any;

  constructor(private service:CategoryService) { }
  select(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0]
      this.image=file;
    }
    }


  upload(){
     let fd= new FormData();
     fd.append("categoryName",this.categoryName);
     fd.append("categoryImage",this.image);
     this.service.addCategory(fd).subscribe(data=>{
       if(data)
       alert('Category successfully add..');
       else
       alert('Can not be add to category..');
     });


  }

  ngOnInit(): void {
  }

}
