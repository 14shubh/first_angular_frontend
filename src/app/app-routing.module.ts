import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {
    path: 'sign-in',
    component: SigninComponent

  },
  {
    path: 'sign-up',
    component:SignupComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-category',
    component: ViewCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-product',
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component:ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
