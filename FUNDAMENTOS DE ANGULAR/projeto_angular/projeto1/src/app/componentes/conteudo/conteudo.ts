import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-conteudo',
  imports: [FormsModule],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.css',
})
export class Conteudo implements OnInit{
  
  public mensagem: string;
  public valor: number;
  public link_foto: string;
  public textoForm: string;
  public senha: string ="";
  public clicado: boolean;
  
  
  public constructor(){
    this.mensagem = "Olá Mundo!";
    this.valor = 0;
    this.link_foto = "angular-logo.jpg"
    this.textoForm = "";
    this.clicado = false;
  }
  
  ngOnInit(): void {
    
  }

  public mudarValor(){
    this.valor ++;
    this.link_foto = "angular-branco.png"; 
  }

  public enviarDados(){
    console.log(this.textoForm + "/" + this.senha + "/" +this.clicado);
    
  }
  
}
