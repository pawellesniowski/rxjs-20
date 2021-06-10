import {Directive, ElementRef, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit{

  constructor(private el: ElementRef) {
    console.log('direcitve: ', this.el);
  }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'click')
      .pipe(mapTo('Hello worlds!'))
      .subscribe((val) => console.log(val));
  }

}
