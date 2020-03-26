import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../../shared/service/subject.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router, private subjectService: SubjectService) { }

  ngOnInit() {

  }

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {

    if (this.loginForm.valid) {
      sessionStorage.setItem('isLoggedIn', 'true');
      console.log("Login successfull")
      this.subjectService.userLoggedIn();
      this.route.navigate(['search']);


    }
    else {
      console.log("Login unsuccessfull")
    }

  }

}
