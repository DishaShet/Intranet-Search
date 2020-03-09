import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginPageComponent, SearchPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[LoginPageComponent, SearchPageComponent]
})
export class PagesModule { }
