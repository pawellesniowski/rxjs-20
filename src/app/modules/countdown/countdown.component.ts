import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, timer } from 'rxjs';
import {
  delay,
  map,
  startWith,
  switchMap,
  switchMapTo,
  takeWhile,
} from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  readonly reset$ = new Subject<void>();

  readonly countdown$ = this.reset$.pipe(
    startWith(5),
    switchMapTo(this.countdownFrom(4))
  );

  constructor() {}

  ngOnInit(): void {}

  countdownFrom(start: number): any {
    return timer(0, 1000).pipe(
      map((index) => start - index),
      takeWhile<number>(Boolean, true)
    );
  }

  restartIt(): void {
    this.reset$.next();
  }
}
