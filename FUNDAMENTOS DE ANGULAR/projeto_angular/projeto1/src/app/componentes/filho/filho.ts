import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.html',
  styleUrl: './filho.css',
})
export class Filho implements OnInit {
  
  @Input() public valorFilho: number = 0;
  @Output() public eventoFilho: EventEmitter<number> = new EventEmitter<number>();

  public outroValor: number =0;

  ngOnInit(): void {   
  }

  public mudarValorFilho(): void{
    this.outroValor += 10;
    this.eventoFilho.emit(this.outroValor);
  }

}
