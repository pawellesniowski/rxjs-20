import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
})
export class StickyHeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  lastScrollTop = 0;
  isHidden = new BehaviorSubject(false);

  constructor() {}

  ngOnInit(): void {
    this.subscription = fromEvent(document, 'scroll').subscribe((e) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.isHidden.next(true);
      } else {
        this.isHidden.next(false);
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
