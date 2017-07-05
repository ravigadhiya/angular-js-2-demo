import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Post {
    constructor(
            public id: number,
            public title: String,
            public body: String,
    ) { }
}

@Injectable()
export class PostService {

  constructor(private http:Http) {
        console.log("Post Service Load");
  }

  getPosts(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts").map((res:Response) => res.json());
  }

    getPostById(id: number):Promise<Post>{
      //console.log("https://jsonplaceholder.typicode.com/posts/" + id);
        return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}
