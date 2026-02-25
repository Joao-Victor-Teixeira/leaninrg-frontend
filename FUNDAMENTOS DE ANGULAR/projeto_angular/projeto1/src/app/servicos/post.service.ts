import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  
  constructor(private http: HttpClient){ }

  // aqui vão os métodos de consumo de API

  public consumirPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  public adcionarPost(post: Post): Observable<Post>{
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", post);

  }
}
