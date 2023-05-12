import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
console.log("test");

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})

export class CartComponentComponent {

    item = '';
    @Output() itemChange = new EventEmitter();
    @Input() items: string[] = [];

  ngOnInit(): void {
    // this.items = ['Apples', 'Bananas','Cherries'];

  }

  addNewItem(): void {
    // this.items.push(this.item);
    console.log(this.items);
    console.log(this.item);
    // event.target.value = this.item;
    this.itemChange.emit(this.item);

  }

}
