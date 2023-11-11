import { Injectable } from '@angular/core';
import { Stationary } from './shared/stationary.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  stationaries: Stationary[] = [
    new Stationary(1, 'Laptop', 1200.0),
    new Stationary(2, 'Monitor', 400.0),
    new Stationary(3, 'Keyboard', 80.0),
    new Stationary(4, 'HeadPhone', 400.0),
  ];

  constructor() {}

  productList() {
    return this.stationaries;
  }
}
