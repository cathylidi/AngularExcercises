import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootItems: string[] = ['Apples', 'Bananas','Cherries'];
  addItem(newItem): void {
    console.log(newItem);
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
