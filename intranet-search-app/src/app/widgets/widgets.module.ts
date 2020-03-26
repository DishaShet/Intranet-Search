import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class WidgetsModule { }
