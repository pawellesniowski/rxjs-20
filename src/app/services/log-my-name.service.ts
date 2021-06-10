import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMyNameService {
  logMyName(name: string): void{
    console.log('My name is', name);
  }
}
