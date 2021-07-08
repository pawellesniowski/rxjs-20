import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, OperatorFunction } from 'rxjs';
import { mapTo } from 'rxjs/operators';

function requestBackendEmulation(
  search: string
): Observable<readonly string[]> {
  console.log('backend called');

  const tests = ['test1', 'test2', 'test3'].filter(
    (test) => !!search && test.startsWith(search)
  );

  if (tests.length) {
    return of(tests);
  }

  if (search.startsWith('1')) {
    return of(['125', '12', '199']);
  }

  return of([]);
}

// TODO: code this operator function
export function smartSearch<T>(
  getSearchFunction: (search: string) => Observable<readonly T[]>,
  searchDebouceTimeMs: number = 400
): OperatorFunction<string, readonly T[] | null> {
  return (source) => source.pipe(mapTo([]));
}

@Component({
  selector: 'app-calculate-locally',
  templateUrl: './calculate-locally.component.html',
  styleUrls: ['./calculate-locally.component.scss'],
})
export class CalculateLocallyComponent {
  readonly control = new FormControl('');

  readonly emptyArray = [];

  readonly items$ = this.control.valueChanges.pipe(
    smartSearch(requestBackendEmulation)
  );

  readonly filterValue = (item: string, value: string): boolean =>
    item.startsWith(value);
}
