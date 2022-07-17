import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Listado de Pokemon';

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemonByIdAutor(1).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
