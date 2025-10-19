import { Component } from '@angular/core';
import { OrderManager } from '../order-manager-service/order-manager';
import { BookCard } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket',
  imports: [CommonModule],
  templateUrl: './basket.html',
  styleUrl: './basket.css'
})
export class Basket {
  
  protected order: BookCard[] = [];
  
  constructor(private orderManager: OrderManager) {
    this.order = this.orderManager.getOrder;
  }

  getResultPrice(): number {
    let resultPrice: number = 0;

    this.order.forEach(book => resultPrice += book.price);
    return resultPrice;
  }

  onDeleteBookFromOrder(deletedBook: BookCard) {
    this.order = this.order.filter(book => book.name !== deletedBook.name);
  }
}
