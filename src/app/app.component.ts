import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista zadań';
  value!: Date;
  getFooter() {
    return '2022 © Lista zadań - Sebastian Matyszewski';
  }
}
