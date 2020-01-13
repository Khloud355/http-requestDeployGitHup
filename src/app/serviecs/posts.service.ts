import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // url: String = "https://jsonplaceholder.typicode.com/posts" ;
  constructor(private http: HttpClient) { }
  khloud;
  posts;
  getPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(khloud => console.log(khloud));
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(khloud => { this.posts = khloud });
  }
  CreatePost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' }
    this.http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(post)).subscribe(Response=>{this.posts.splice(0,0,post)});

  }
  UpdatePost(post){

  }
  }

