import { Component, OnInit } from '@angular/core';
import { blogitems } from '../blogdata';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  blogitems = blogitems;

  constructor() { }

  ngOnInit(): void {
  }

}
