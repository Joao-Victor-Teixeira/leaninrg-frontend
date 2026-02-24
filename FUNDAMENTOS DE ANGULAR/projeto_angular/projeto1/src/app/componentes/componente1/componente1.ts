import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css',
})
export class Componente1 implements OnInit {
  
  public constructor(private activatedRoute: ActivatedRoute){
    let p1: string;
    let p2: string;

    p1 = this.activatedRoute.snapshot.queryParams['p1'];
    p2 = this.activatedRoute.snapshot.queryParams['p2'];

    console.log("p1 = " +p1)
    console.log("p2 = " +p2)
  }
  
  ngOnInit(): void {
    
  }

}
