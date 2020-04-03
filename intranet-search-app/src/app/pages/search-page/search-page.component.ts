import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubjectService } from '../../shared/service/subject.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private subjectService:SubjectService) { }

  ngOnInit() {
    
  }
  sortItems=['Udupi','Mangalore','Mudipu','Mysore'];
  
  searchForm=new FormGroup({
    searchInput:new FormControl('')
  })
}
