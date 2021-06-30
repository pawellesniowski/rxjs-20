import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { LoginService } from './login.service';
import { Observable, Observer, of, Subject, Subscription, timer } from 'rxjs';
import {
  catchError,
  ignoreElements,
  mapTo,
  repeat,
  retry,
  share,
  startWith,
  switchMap,
  switchMapTo,
  timeout,
} from 'rxjs/operators';

const responsePromis = Promise.resolve(Math.random());

const subscriptionFn = (observer: Observer<number>) => {
  responsePromis.then((val) => {
    observer.next(val);
  });
};

const observerX = Observable.create(subscriptionFn);

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss'],
})
export class SimpleLoginComponent implements OnInit {
  readonly submit$ = new Subject<void>();

  readonly request$ = this.submit$.pipe(
    switchMapTo(this.loginService.pipe(startWith(''))),
    share()
  );

  readonly user$ = this.request$.pipe(retry());

  readonly error$ = this.request$.pipe(
    ignoreElements(),
    catchError((e) => of(e)),
    repeat(),
    switchMap((e) => timer(5000).pipe(startWith(e)))
  );

  readonly disabled$ = this.request$.pipe(
    mapTo(true),
    catchError(() => of(false)),
    repeat()
  );

  showError = false;
  constructor(
    @Inject(LoginService) private readonly loginService: Observable<string>
  ) {}

  ngOnInit(): void {
    console.log('observerX: ', observerX);
    observerX.pipe().subscribe((val: number) => console.log('x1: ', val));

    setTimeout(() => {
      observerX.pipe().subscribe((val: number) => console.log('x2: ', val));
    }, 2000);

    setTimeout(() => {
      observerX.pipe().subscribe((val: number) => console.log('x3: ', val));
    }, 4000);
  }
}
