import { Component } from '@angular/core';
import { OrderManager } from '../order-manager-service/order-manager';
import { BookCard } from '../models/models';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  protected order: BookCard[] = [];

  constructor(private orderManager: OrderManager) {
    this.order = this.orderManager.getOrder;
  }

  getResultPrice(): number {
    let resultPrice: number = 0;

    this.order.forEach(book => resultPrice += book.price);
    return resultPrice;
  }

}
