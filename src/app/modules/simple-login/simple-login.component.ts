import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { LoginService } from './login.service';
import { Observable, of, Subject, timer } from 'rxjs';
import {
  catchError,
  delay,
  ignoreElements,
  map,
  mapTo,
  repeat,
  retry,
  share,
  startWith,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs/operators';

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

  ngOnInit(): void {}

  submitLogin(): void {
    this.loginService
      .pipe(
        map((res) => {
          if (res === 'Login Failure') {
            this.showError = true;
          }
        }),
        delay(5000),
        tap((_) => (this.showError = false))
      )
      .subscribe();
  }
}
