import { Component } from '@angular/core';
console.log("2233");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootItems: string[] = ['Apples', 'Bananas','Cherries'];
  addItem({ newItem }: { newItem: string; }): void {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

}
