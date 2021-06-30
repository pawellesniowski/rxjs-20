import { Component, Inject, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingService],
})
export class LoadingComponent implements OnInit {
  constructor(
    @Inject(LoadingService) private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.load().subscribe((v) => console.log('BANG: ', v));
  }
}
