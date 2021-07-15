import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import {
  concatMap,
  delay,
  map,
  repeat,
  scan,
  startWith,
  tap,
} from 'rxjs/operators';

const SUBTITLES = [
  {
    text: 'It had a begining',
    duration: 1000,
  },
  {
    text: 'It must have an end',
    duration: 1500,
  },
  {
    text: 'Don`t leave me in darkness',
    duration: 1000,
  },
  {
    text: 'Please give me your hand',
    duration: 2000,
  },
];

@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.component.html',
  styleUrls: ['./karaoke.component.scss'],
})
export class KaraokeComponent implements OnInit {
  constructor() {}

  // current:
  // create stream from SUBTITLES array;
  current$ = from([
    {
      text: 'Please give me your hand',
      duration: 2000,
    },
    ...SUBTITLES,
  ]).pipe(
    concatMap(({ text, duration }, i) =>
      of(null).pipe(delay(duration), startWith([text, SUBTITLES[i + 1]?.text]))
    ),
    repeat()
  );

  ngOnInit(): void {}
}
