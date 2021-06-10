import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {LogMyNameService} from './services/log-my-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('select') select!: ElementRef;

  // @ts-ignore
  constructor(@Inject(LogMyNameService) private logMyNameService: LogMyNameService) {
  }

  ngOnInit(): void {
    this.logMyNameService.logMyName('Paweł');
  }

  ngAfterViewInit(): void {
    fromEvent(this.select.nativeElement, 'focusout').pipe(
    // @ts-ignore
      map((coto) => console.log('co to ? ', coto.relatedTarget))
    )
      .subscribe(v => console.log('v', v));
  }
}
