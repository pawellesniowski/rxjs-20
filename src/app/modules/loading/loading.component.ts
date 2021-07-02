import { Component, Inject, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';
import {
  switchMap,
  filter,
  share,
  map,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingService],
})
export class LoadingComponent implements OnInit {
  private readonly load: Subject<number> = new Subject<number>();

  private readonly response$ = this.load.pipe(
    switchMap(() => this.loadingService.load()),
    share()
  );

  readonly loadingProgress$ = this.response$.pipe(
    filter((val) => Number.isFinite(val))
  );

  readonly result$ = this.response$.pipe(
    map((val) => (typeof val === 'string' ? val : null)),
    distinctUntilChanged()
  );

  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  onButtonClick(): void {
    this.load.next();
  }
}
