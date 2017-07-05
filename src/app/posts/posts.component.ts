import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {

   //posts:Post[];
  posts:any;
  selectedPostId: number = null;

  constructor(
      private router: Router,
      private postservice: PostService) {

  }

  getPost():void{
    this.postservice.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }
  ngOnInit() {
    this.getPost();
  }

  onSelect(post):void{
    this.selectedPostId = post.id;
    //console.log(this.selectedPostId);
  }


}
