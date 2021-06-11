import { Component, Inject, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss'],
})
export class SimpleLoginComponent implements OnInit {
  constructor(
    @Inject(LoginService) private readonly loginService: Observable<string>
  ) {}

  ngOnInit(): void {
    this.loginService.subscribe((res) => console.log('2: ', res));
  }
}
