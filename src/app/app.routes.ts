import { provideRouter, Routes } from '@angular/router';
import { IntroductoryPage } from './introductory-page/introductory-page';
import { Assortment } from './assortment/assortment';
import { Basket } from './basket/basket';
import { Order } from './order/order';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    { path: "", component: IntroductoryPage},
    { path: "assortment", component: Assortment},
    { path: "basket", component: Basket},
    { path: "order", component: Order},
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};
