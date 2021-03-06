import { Injectable } from '@angular/core';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {"title": "Sweat homme", "description": "<C0D1NG_TH3_W0RLD> SWEATSHIRT CHAUD BIO À CAPUCHE - HOMME", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png", "price": 39, "stock": 2},
    {"title": "Tee-Shirt homme", "description": "TEE-SHIRT BIO À COL ROND - HOMME", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png", "price": 19, "stock": 2},
    {"title": "Tee-Shirt femme", "description": "TEE-SHIRT BIO À COL ROND - FEMME", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png", "price": 19, "stock": 2},
    {"title": "Tote bag", "description": "<C0D1NG_TH3_W0RLD>, TOTE BAG BIO.", "photo": "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png", "price": 12.5, "stock": 2}
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  decreaseStock(product: Product) {
    product.stock -= 1;
  }

}
