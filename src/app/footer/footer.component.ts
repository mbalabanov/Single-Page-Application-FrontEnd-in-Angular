import { Component, OnInit } from '@angular/core';
import { blogitems } from '../blogdata';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  blogitems = blogitems;

  constructor() { }

  ngOnInit(): void {
  }

}
