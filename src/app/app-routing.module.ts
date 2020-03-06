import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"blog", component: BlogComponent
  },
  {
    path:"portfolio", component: PortfolioComponent
  },
  {
    path: 'blogpost/:postId', component: BlogpostComponent
  },
  {
    path: 'shoppingcart', component: ShoppingcartComponent
  },
  {
    path: 'category/:categoryId', component: CategorydetailComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
