import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {

  private posts: Post[] = [];  
  private isLoading=true;
  private postsUpdated = new Subject<Posts>();

  constructor(private http: HttpClient, private router: Router) {}

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPosts() {
    this.http
      .get("http://localhost:5000/api/posts")
       .subscribe(x => {
        this.posts=x.data;       

        const receiver:Post={ 
          info:this.posts          
        }
        this.postsUpdated.next(receiver);
      });
  }

  addForm(Name: string, Address: string, Email: string, City:string, State:string) {
    const post: Post = { Name,Email,City,Address,State };
    this.http
      .post(
        "https://localhost:5001/api/posts", post)
      .subscribe(res => {        
        this.posts.push(res.Post);

        const receiver:Post={ 
          info:this.posts          
        }
        this.postsUpdated.next(receiver);        
        this.router.navigate(["/"]);
      });
   
  }  
}
