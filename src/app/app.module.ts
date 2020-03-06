import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StandardheaderComponent } from './standardheader/standardheader.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    ListComponent,
    FeaturesComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PortfolioComponent,
    StandardheaderComponent,
    BlogpostComponent,
    ShoppingcartComponent,
    CategorydetailComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
