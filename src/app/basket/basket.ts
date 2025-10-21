import { Component } from '@angular/core';
import { OrderManager } from '../order-manager-service/order-manager';
import { BookCard } from '../models/models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  imports: [CommonModule],
  templateUrl: './basket.html',
  styleUrl: './basket.css'
})
export class Basket {
  
  protected order: BookCard[] = [];
  
  constructor(private orderManager: OrderManager, private router: Router) {
    this.order = this.orderManager.getOrder;
  }

  getResultPrice(): number {
    let resultPrice: number = 0;

    this.order.forEach(book => resultPrice += book.price);
    return resultPrice;
  }

  increaseCount(name: string) {
    this.orderManager.increaseCount(name);
  }

  decreaseCount(name: string) {
    this.orderManager.decreaseCount(name);
  }

  onDeleteBookFromOrder(deletedBook: BookCard) {
    this.order = this.order.filter(book => book.name !== deletedBook.name);
  }

  removeFromBasket(name: string) {
    this.orderManager.removeFromBasket(name);
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }
}
