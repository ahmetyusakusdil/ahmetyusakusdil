import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 2,
    unitsPrice: 34,
  };
  product2 = {
    productId: 3,
    productName: 'Mause',
    categoryId: 2,
    unitsPrice: 55,
  };
  product3 = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 2,
    unitsPrice: 2,
  };
  product4 = {
    productId: 5,
    productName: 'Camera',
    categoryId: 2,
    unitsPrice: 3,
  };
  product5 = { productId: 6, productName: 'Tv', categoryId: 2, unitsPrice: 54 };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() {}

  ngOnInit(): void {}
}
