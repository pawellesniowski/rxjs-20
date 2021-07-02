import { Component, Inject, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingService],
})
export class LoadingComponent implements OnInit {
  loading: Subject<number> = new Subject<number>();

  response$ = this.loading.pipe(switchMap(() => this.loadingService.load()));

  loadingProgress$ = this.response$.pipe(
    filter((val) => typeof val === 'number')
  );

  result$ = this.response$.pipe(filter((val) => typeof val !== 'number'));

  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  onButtonClick(): void {
    this.loading.next();
  }
}
