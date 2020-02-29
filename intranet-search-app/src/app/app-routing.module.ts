import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginPageComponent } from './login-page/login-page.component';
//import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
  //{path:'login-page',component: LoginPageComponent},
  //{path:'search-page',component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
