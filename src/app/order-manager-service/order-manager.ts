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
      image: "",
    }, {
      name: "Двенадцать стульев. И. Ильиф, Е. Петров",
      genre: "остросатиритический роман-фельетон",
      price: 300,
      image: "",
    }, {
      name: "Generation. П. В. Пелевин",
      genre: "постмодернисткий роман",
      price: 600,
      image: "",
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
}
