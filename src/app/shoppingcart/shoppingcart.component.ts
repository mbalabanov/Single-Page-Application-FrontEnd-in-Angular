import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  cartitems;
  totalprice = 0;
  discount10 = 0;
  discount20 = 0;
  discountedPrice10 = 0;
  discountedPrice20 = 0;

  constructor(private cartService: CartService) { }

	calculateTotal() {
		for(let item of this.cartitems){
      this.totalprice += item.price;
      this.discountedPrice10 = this.totalprice;
      this.discountedPrice20 = this.totalprice;
    };
    this.discount10 = this.totalprice / 10;
    this.discount20 = this.totalprice / 5;
    this.discountedPrice10 -= this.discount10;
    this.discountedPrice20 -= this.discount20;
  }

  ngOnInit(): void {
    this.cartitems = this.cartService.getItems();
    this.calculateTotal();
  }

}
