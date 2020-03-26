import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { HomeComponent } from './widgets/home/home.component';


const routes: Routes = [
  {path:'login',component: LoginPageComponent},
  {path:'search',component: SearchPageComponent,canActivate:[AuthGuard]},
  {path:'header',component: HeaderComponent},
  {path:'footer',component: FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
