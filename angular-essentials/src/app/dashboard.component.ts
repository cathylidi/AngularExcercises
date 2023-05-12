import { Component } from "@angular/core";

@Component ({
  selector: 'app-dashboard',
  template:
  `<p>Loading State: {{loadState}}</p>
  <input type="text" [(ngModel)]="loadState">
   <button (click)="onClickMe()">reload</button>
   <app-user-detail></app-user-detail>
  `,
  styleUrls: ['./app.component.css']
})

export class DashboardComponent {
  loadState = 'loading';

  onClickMe() {
    this.loadState = 'finished';
  }
}
