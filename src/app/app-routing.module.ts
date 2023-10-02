import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from './components/listar-filmes/listar-filmes.component';
import { DetalhesFilmeComponent } from './components/detalhes-filme/detalhes-filme.component';
import { EmAltaFilmeComponent } from './shared/em-alta/em-alta.component';
import { EmBreveComponent } from './shared/em-breve/em-breve.component';
import { LancamentoFilmeComponent } from './shared/lancamentos/lancamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-filmes',
    pathMatch: 'full',
  },
  {
    path: 'listar-filmes',
    component: ListarFilmesComponent,
  },
  {
    path: 'detalhes-filmes/:id',
    component: DetalhesFilmeComponent,
  },
  {
    path: 'listar-filmes-em-alta',
    component: EmAltaFilmeComponent,
  },
  {
    path: 'listar-filmes-em-breve',
    component: EmBreveComponent,
  },
  {
    path: 'listar-filmes-lancamentos',
    component: LancamentoFilmeComponent,
  },
  {
    path: 'listar-filmes/:categoria',
    component: ListarFilmesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }