import { Component } from '@angular/core';
import { Stationary } from './shared/stationary.model';
import { ProductDataService } from './product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stationaries: Stationary[] = [];
  constructor(public stationary: ProductDataService) {
    this.stationaries = stationary.productList();
  }
}
