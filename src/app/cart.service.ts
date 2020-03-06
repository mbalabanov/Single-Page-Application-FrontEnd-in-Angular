import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems = [];

  constructor() { }

  addToCart(item) {
    this.cartitems.push(item);
  }

  getItems() {
    return this.cartitems;
  }
 
  clearCart() {
    this.cartitems = [];
    return this.cartitems;
  }

}
