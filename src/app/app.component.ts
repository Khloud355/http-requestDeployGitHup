import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostsService } from './serviecs/posts.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  khloud;
  posts;
  constructor(private http: HttpClient) { }
  // khloud;
  // posts;
  ngOnInit(): void{
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(khloud => console.log(khloud));
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(khloud => { this.posts = khloud });
  }
  CreatePost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' }
    this.http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(post)).subscribe(Response=>{this.posts.splice(0,0,post)});

  }
  // UpdatePost(post ,inputTitle){
  //   let UpdatePost ={title: inputTitle, id:'' }
  //   this.http.put("https://jsonplaceholder.typicode.com/posts", UpdatePost).

  // }
  }

