import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../shared/auth/auth.guard';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../shared/service/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private route: Router, private subjectService: SubjectService) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('isLoggedIn') == 'true')
      this.loggedIn = true;
    else
      this.loggedIn = false;
    this.subjectService.subject.subscribe(data => {
      this.loggedIn = data;
    })

  }

  logoutClick() {
    sessionStorage.setItem('isLoggedIn', 'false');
    this.loggedIn = false;
    this.route.navigate(['login']);
  }

  toggleFunction() {
    const el: any = document.getElementById("toggle-nav");
    el.childNodes.forEach(element => {
      if (element.style.display == "block") {
        element.style.display = "none";
        el.childNodes[0].style.display = "inline-block";
      }

      else
        element.style.display = "block";

    });

    console.log(el);


  }
}
