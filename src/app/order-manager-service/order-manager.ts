import { Injectable } from '@angular/core';
import { BookCard } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OrderManager {
  private books: BookCard[] = [
    {
      name: "Война и мир. Л. Н. Толстой",
      genre: "роман-эпопей",
      price: 500,
      image: "war_and_peace_logo.png",
      count: 1,
    }, {
      name: "Двенадцать стульев. И. Ильиф, Е. Петров",
      genre: "остросатиритический роман-фельетон",
      price: 300,
      image: "twelve_chairs_logo.png",
      count: 1,
    }, {
      name: "Generation. П. В. Пелевин",
      genre: "постмодернисткий роман",
      price: 600,
      image: "generation_p_logo.png",
      count: 1,
    }
  ];

  private order: BookCard[] = [];

  get getBooks(): BookCard[] {
    return this.books;
  }

  get getOrder(): BookCard[] {
    return this.order;
  }

  addBookToOrder(book: BookCard) {
    this.order.push(book);
  }

  increaseCount(name: string) {
    for (const book of this.order) {
      if (book.name === name) {
        book.count += 1;
      }  
    }
  }

  decreaseCount(name: string) {
    for (const book of this.order) {
      if (book.name === name) {
        book.count -= 1;
      }  
    }

    this.order = this.order.filter(book => book.count > 0);
  }

  removeFromBasket(name: string) {
    this.order = this.order.filter(book => book.name !== name);
  }
}
