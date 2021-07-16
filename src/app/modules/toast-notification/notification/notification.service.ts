import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

interface Notification<I, O> {
  content: I;
  observer: Observer<O>;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BehaviorSubject<
  readonly Notification<any, any>[]
> {
  constructor() {
    super([]);
  }

  show<I, O>(content: I): Observable<O> {
    return new Observable<O>((observer) => {
      const notification: Notification<I, O> = {
        content,
        observer,
      };
      this.next([...this.value, notification]);

      return () => {
        this.next(this.value.filter((item) => item !== notification));
      };
    });
  }
}
