import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../../shared/service/subject.service';
import { User } from '../user';
import { AuthGuard } from '../../shared/auth/auth.guard';
import { delay } from 'q';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isChekked: boolean = false;

  constructor(private route: Router, private subjectService: SubjectService, private authService: AuthGuard) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.user=JSON.parse(localStorage.getItem('token'));
    }
  }

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl('')
  })

  user = new User();

  onSubmit() {
    this.user.userName = this.loginForm.get('userName').value;
    this.user.password = this.loginForm.get('password').value;
    this.user.rememberMe = this.loginForm.get('rememberMe').value;

    if (this.loginForm.valid) {
      sessionStorage.setItem('isLoggedIn', 'true');
      console.log("Login successfull");
      if (this.user.rememberMe) {
        localStorage.setItem('token',JSON.stringify(this.user));
      }

      this.subjectService.userLoggedIn();
      this.route.navigate(['search']);
      
    }
    else {
      console.log("Login unsuccessfull")
    }

  }

}
