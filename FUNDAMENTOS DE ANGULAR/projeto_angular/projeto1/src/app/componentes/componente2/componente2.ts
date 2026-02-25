import { Component, OnInit } from '@angular/core';
import { PostService } from '../../servicos/post.service';
import { Post } from '../../model/Post';


@Component({
  selector: 'app-componente2',
  imports: [],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css',
})
export class Componente2 implements OnInit {
  
  public constructor(private service: PostService){

  }

  ngOnInit(): void {
    this.service.consumirPosts().subscribe({
      next: (res: Post[]) => {
        console.log("Sucesso");
        console.log(res);
      },
      error: (err: any) => {
        console.log("Erro");
        console.log(err);
      }
    });
  }

  public enviarDados(): void{
    let postagem: Post = new Post();
    postagem.body = "Teste do Isidro tentanto fazer a comunicacao com o JSONPlaceHolder";
    postagem.title = "Teste do Isidro";
    postagem.userId = 1;

    this.service.adcionarPost(postagem).subscribe({
      next: (res:Post) =>{
        console.log("Post Adicionado");
        console.log(res);
      },
      error: (err: any) =>{
        console.log("Erro ao adicionar Postagem");
        console.log(err);
      }
    })
  }
}
