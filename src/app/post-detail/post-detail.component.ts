import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {Post, PostService} from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers : [PostService]
})
export class PostDetailComponent implements OnInit {

  post:Post;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private postService: PostService
              ) { }

  ngOnInit():void {
    this.route.params
    .switchMap((params: Params) => this.postService.getPostById(params['id']))
        .subscribe((post:Post) => this.post = post);
    }

}
