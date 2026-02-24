import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rotacustom',
  imports: [],
  templateUrl: './rotacustom.html',
  styleUrl: './rotacustom.css',
})
export class Rotacustom implements OnInit {
  
  public idRecebido: string="";
  public constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }
  
  ngOnInit(): void {
    this.idRecebido = this.activatedRoute.snapshot.params['id'];
    console.log("ID Recebido na rota = " +this.idRecebido)
  }

  public navegar(): void{
    this.router.navigate(['/link1'])
  }
}
