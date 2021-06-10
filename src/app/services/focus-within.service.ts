import {ElementRef, Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {defer, fromEvent, merge, Observable, of} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Injectable()
export class FocusWithinService extends Observable<Element | null> {
  constructor(
    @Inject(DOCUMENT) documentRef: Document,
    { nativeElement }: ElementRef<HTMLElement>
  ) {
    const focusedElement$ = merge(
      defer(() => of(documentRef.activeElement)),
      fromEvent(nativeElement, 'focusin').pipe(map(({ target }) => target)),
      fromEvent(nativeElement, 'focusout').pipe(
        // @ts-ignore
        map(({ relatedTarget }) => relatedTarget)
      )
    ).pipe(
      map(element =>
        element && nativeElement.contains(element) ? element : null
      ),
      distinctUntilChanged(),
    );

    super(subscriber => focusedElement$.subscribe(subscriber));
  }
}
