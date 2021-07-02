import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { endWith, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // this method should return loading information in persantage, then return data in string:
  load(): Observable<number | string> {
    return interval(1000).pipe(
      map((tick) => {
        return (tick + 1) * 20;
      }),
      take(5),
      endWith('Some data to display')
    );
  }
}
