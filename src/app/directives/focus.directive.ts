import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'click')
      .pipe(mapTo('Hello worlds!'))
      .subscribe();
  }
}
