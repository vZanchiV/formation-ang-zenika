import { Component, OnInit, Inject } from '@angular/core';

import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];
  sortKey: keyof Product = "title";

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    @Inject('welcomeMsg') public title: string
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
    this.customerService.getBasket().subscribe();
  }

  getTotal(): number {
    return this.customerService.getTotal();
  }

  updatePrice(event) {
    this.customerService.addProduct(event)
      .subscribe(() => this.productService.decreaseStock(event));
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
}
