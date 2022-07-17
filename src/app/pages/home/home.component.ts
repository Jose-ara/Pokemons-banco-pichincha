import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/domain/model/pokemon-model';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Listado de Pokemon';
  public pokemons: PokemonModel[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemonByIdAutor(1).subscribe(
      res => {
        this.pokemons = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  searchUser(){
    console.log('llamó')
  }

}
