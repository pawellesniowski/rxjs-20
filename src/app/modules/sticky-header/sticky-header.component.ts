import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {
  distinctUntilChanged,
  map,
  pairwise,
  startWith,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
})
export class StickyHeaderComponent {
  isHidden$ = fromEvent(this.documentRef, 'scroll').pipe(
    map(() => this.documentRef.documentElement.scrollTop),
    pairwise(),
    map(([prev, next]) => prev < next),
    startWith(false),
    distinctUntilChanged()
  );

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
