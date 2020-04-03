import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INSPECT_MAX_BYTES } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subject = new Subject<boolean>();
  // offsetLogin=new Subject<string>();

userLoggedIn(){
  return this.subject.next(true);
}
  
// offsetLoginForm(){
//   return this.offsetLogin.next('120px');
// }
}



