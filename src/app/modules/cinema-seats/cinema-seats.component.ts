import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, scan, share, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss'],
})
export class CinemaSeatsComponent implements OnInit {
  readonly seats: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  readonly selectedSeat: Subject<number> = new Subject<number>();

  readonly selectedSeats$ = this.selectedSeat.pipe(
    scan((acc: Set<number>, cur: number) => {
      if (acc.has(cur)) {
        acc.delete(cur);
      } else {
        acc.add(cur);
      }
      return acc;
    }, new Set<number>()),
    startWith(new Set()),
    share()
  );

  readonly countSelectedSeats$ = this.selectedSeats$.pipe(
    map((set) => set.size),
    tap((seats) => this.finalCostSubject.next(seats * 100))
  );

  finalCostSubject = new BehaviorSubject<number>(0);

  showFinalCosts = false;

  constructor() {}

  ngOnInit(): void {}

  buyTickets(): void {
    this.showFinalCosts = true;
  }
}
