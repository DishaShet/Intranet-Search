import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INSPECT_MAX_BYTES } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subject = new Subject<boolean>();

userLoggedIn(){
  return this.subject.next(true);
}
  

}



