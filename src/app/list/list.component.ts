import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photoCategories } from '../photoinfos';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  photoCategories = photoCategories;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

/*
  addToCart(photos) {
    this.cartService.addToCart(photo);
    window.alert('Your product has been added to the cart!');
  }
*/
  ngOnInit(): void {
  }

}
