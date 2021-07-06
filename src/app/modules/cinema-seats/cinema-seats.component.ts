import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss'],
})
export class CinemaSeatsComponent implements OnInit {
  readonly seats: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}
}
