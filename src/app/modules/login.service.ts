import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends Observable<string> {
  constructor() {
    super((subscriber) =>
      of(Math.random())
        .pipe(
          delay(500),
          tap(() => console.log('Login request sent')),
          delay(2000),
          map((res) => (res > 0.5 ? 'Login Failure' : 'Pawel Lesniowski'))
        )
        .subscribe(subscriber)
    );
  }
}
