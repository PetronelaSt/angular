import { Component } from '@angular/core';
import { Konzultant } from './konzultanti/Konzultant';
import { equal } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Personálka';

  constructor() {
  }

  ngOnInit(): void {
  }
}
