import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { photoCategories } from '../photoinfos';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit {

	photoCategories = photoCategories;
	photoCategory;
	cartitems;
	searchText;

	constructor(private route: ActivatedRoute, private cartService: CartService) { }

	ngOnInit(): void {
        function getCategoryIndex(arg) {
                   for(var i = 0; i < photoCategories.length; i += 1) {
                       if(photoCategories[i].name.toLowerCase() === arg) {
                           return i;
                       }
                   }
               }

       		this.route.paramMap.subscribe(params => {
       		   let slug = params.get('categoryId');
       		   let theIndex = getCategoryIndex(slug);
       		   this.photoCategory = photoCategories[theIndex];
       		});
	}

  addToCart(item) {
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

}
