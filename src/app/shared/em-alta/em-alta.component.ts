import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { ListagemFilme } from 'src/app/models/listagem-filme';
import { ResultadoBusca } from 'src/app/models/resultado-busca';

@Component({
  selector: 'app-em-alta',
  templateUrl: './em-alta.component.html',
  styleUrls: ['./em-alta.component.css']
})
export class EmAltaFilmeComponent {

  filmesPorPolularidade: ListagemFilme[] = [];
  page: number = 1;
  resultado: ResultadoBusca = new ResultadoBusca(this.filmesPorPolularidade, 0, 0);

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {
    this.filmeService.selecionarFilmePorPopularidade().subscribe((filmes: ListagemFilme[]) => {
      this.filmesPorPolularidade = filmes;
    })

    this.filmeService.pegarResultadosDeBuscaPoupular().subscribe((resultado: ResultadoBusca) => {
      this.resultado = resultado;
    })
  }

  public trocarDePagina(pgSelec: number){
    const pgStr: string = pgSelec.toString();

      this.filmeService.buscarFilmesPorPaginaPopular(pgStr).subscribe((filmes: ListagemFilme[]) => {
        this.filmesPorPolularidade = filmes;
        console.log(filmes);
      });
  }
}