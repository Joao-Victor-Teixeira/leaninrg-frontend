import { Routes } from '@angular/router';
import { Conteudo } from './componentes/conteudo/conteudo';
import { Componente1 } from './componentes/componente1/componente1';
import { Componente2 } from './componentes/componente2/componente2';
import { Componente3 } from './componentes/componente3/componente3';

export const routes: Routes = [
    {path: '', component: Conteudo},
    {path:'link1', component: Componente1},
    {path:'link2', component: Componente2},
    {path:'link3', component: Componente3}
];
