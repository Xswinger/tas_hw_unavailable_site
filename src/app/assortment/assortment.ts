import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderManager } from '../order-manager-service/order-manager';
import { BookCard } from '../models/models';
import { CommonModule } from '@angular/common';

import { MouseButton } from '../components/mouse-button/mouse-button';
import { CanvasText } from '../components/canvas-text/canvas-text';

@Component({
  selector: 'app-assortment',
  imports: [FormsModule, CommonModule, MouseButton, CanvasText],
  templateUrl: './assortment.html',
  styleUrl: './assortment.css'
})
export class Assortment {
  public search: string = "";

  constructor(private orderManager: OrderManager) {}

  protected getBooks(): BookCard[] {
    const books = this.orderManager.getBooks;
    return books.filter(book => book.name.includes(this.search));
  }

  onAddBookToOrder(book: BookCard) {
    this.orderManager.addBookToOrder(book);
  }
}
