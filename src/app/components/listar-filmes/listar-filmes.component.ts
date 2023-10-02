import { Component, OnInit } from '@angular/core';
import { ListagemFilme } from 'src/app/models/listagem-filme';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { FilmeService } from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {
  filmesPorPopularidade: ListagemFilme[] = [];
  filmesLancamentos: ListagemFilme[] = [];
  filmesEmBreve: ListagemFilme[] = [];
  filmesFavoritos: ListagemFilme[] = [];

  constructor(private filmeService: FilmeService, private favoritoService: FavoritosService){

  }
  ngOnInit(): void {
    const filmes = this.favoritoService.obterListaFav();
    let contador: number = 0;

    for(let filme of filmes){
      this.favoritoService.selecionarFilmePorId(filme.id).subscribe((filme) => {
        this.filmesFavoritos[contador] = filme;
        contador++;
      })
    }
  }
}