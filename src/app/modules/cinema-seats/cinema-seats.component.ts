import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss'],
})
export class CinemaSeatsComponent implements OnInit {
  readonly seats: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  private selectedSeats = new BehaviorSubject<Array<number>>([]);

  finalCost = this.selectedSeats.pipe(map((seats) => seats.length * 100));

  selectedSeats$ = this.selectedSeats.asObservable();

  showFinalCosts = false;

  constructor() {}

  ngOnInit(): void {}

  selectSeat(seat: number): void {
    if (!this.selectedSeats.value.includes(seat)) {
      this.selectedSeats.next([...this.selectedSeats.value, seat]);
    } else {
      this.removeSeat(seat);
    }
  }

  removeSeat(seat: number): void {
    const filtered = this.selectedSeats.value.filter((val) => val !== seat);
    this.selectedSeats.next(filtered);
  }

  trackByFn(index: number, item: number): number {
    return item;
  }

  isSelected(seat: number): boolean {
    return this.selectedSeats.value.includes(seat);
  }

  buyTickets(): void {
    this.showFinalCosts = true;
  }
}
