import {
  Component,
  Inject,
  inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, share, startWith } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const PAGE_VISIBILITY = new InjectionToken(
  'Shared observable showing page visibility based on `document visibility chaged`',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);

      return fromEvent(document, 'visibilitychange').pipe(
        startWith(0),
        map(() => documentRef.visibilityState !== 'hidden'),
        distinctUntilChanged(),
        share()
      );
    },
  }
);

@Component({
  selector: 'app-page-visibility',
  templateUrl: './page-visibility.component.html',
  styleUrls: ['./page-visibility.component.scss'],
})
export class PageVisibilityComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  constructor(
    @Inject(PAGE_VISIBILITY) readonly pageVisibility$: Observable<boolean>
  ) {}

  ngOnInit(): void {
    this.subscription = this.pageVisibility$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
