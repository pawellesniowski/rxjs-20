import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
  map,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const PALETTE_WIDTH = 200;
const PALETTE_HEIGHT = 200;

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value));
};

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  private readonly target$$ = new Subject<HTMLElement>();
  private readonly target$ = this.target$$.pipe(shareReplay(1));

  @ViewChild('colorPicker')
  set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
    if (ref) {
      this.target$$.next(ref.nativeElement);
    }
  }

  private readonly mouseDown$ = this.target$.pipe(
    switchMap((target) => fromEvent<MouseEvent>(target, 'mousedown')),
    map((val) => {
      console.log('1:', val);
      return val;
    })
  );

  private readonly mouseMove$ = this.target$.pipe(
    switchMap((target) => fromEvent<MouseEvent>(target, 'mousemove')),
    map((val) => {
      console.log('2:', val);
      return val;
    })
  );

  private readonly mouseUp$ = fromEvent<MouseEvent>(
    this.documentRef,
    'mouseup'
  ).pipe(
    map((val) => {
      console.log('3:', val);
      return val;
    })
  );

  readonly coordinates$ = this.mouseDown$.pipe(
    switchMap((down) =>
      this.mouseMove$.pipe(
        map((move) => [move.clientX, move.clientY]),
        startWith([down.clientX, down.clientY]),
        map(([x, y]) => [
          clamp(x, 0, PALETTE_WIDTH),
          clamp(y, 0, PALETTE_HEIGHT),
        ]),
        takeUntil(this.mouseUp$)
      )
    ),
    startWith([0, 0])
  );

  readonly left$ = this.coordinates$.pipe(map(([x]) => x));
  readonly top$ = this.coordinates$.pipe(map(([_, y]) => y));

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
