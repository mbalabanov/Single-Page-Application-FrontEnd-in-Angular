import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogitems } from '../blogdata';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  blogitem;
  blogitems = blogitems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    function getPostIndex(arg) {
               for(var i = 0; i < blogitems.length; i += 1) {
                   if(blogitems[i].urlAddress.toLowerCase() === arg) {
                       return i;
                   }
               }
           }

       this.route.paramMap.subscribe(params => {
          let slug = params.get('postId');
          let theIndex = getPostIndex(slug);
          this.blogitem = blogitems[theIndex];
       });
  }

}
