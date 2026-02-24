import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { Conteudo } from './componentes/conteudo/conteudo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Cabecalho,
    Conteudo,
    Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('JoãoDev');
}
