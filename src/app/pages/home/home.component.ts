import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  public suscripcion: Subscription;
  public idAuthor = '';
  public showCreate: boolean;
  public pokemonEdit: PokemonModel = {
    "name": "Jose",
    "image": "una imagen",
    "attack": 100,
    "defense": 90,
    "hp": 100,
    "type": "Golden",
    "idAuthor": 1
  };

  constructor(
    private pokemonService: PokemonService
  ) {
    this.suscripcion = this.pokemonService.recibirTerminoBusqueda().subscribe(data => {
      this.idAuthor = data;
      this.getPokemons();
      })
   }

  ngOnInit(): void {
  }

  getPokemons(){
    this.pokemonService.getPokemonByIdAutor(this.idAuthor).subscribe(
      res => {
        this.pokemons = res;
      },
      err => {
      }
    );
  }

  //falta Test
  deletePokemon(pokemon: PokemonModel) {
    this.pokemonService.deletePokemon(pokemon.id).subscribe(res => {
      this.pokemons.splice(this.pokemons.indexOf(pokemon),1);
    },
      err => {
        console.log('se fue', err);
      }
    );
  }

  //falta test
  enviarTerminoBusqueda(){
/*     if(this.idAuthor === ''){
      this.pokemonService.setError('Agrega un texto de busqueda');
    } */
    
    this.pokemonService.enviarTerminoBusqueda(this.idAuthor);
  }

  save() {
    this.showCreate = true;
  }

  updateTablePokemon(pokemon: PokemonModel){
    this.pokemons.push(pokemon);
  }

  updatePokemon(pokemon: PokemonModel){
    this.pokemonEdit = pokemon;
  }

  closeCreate(value: boolean) {
    this.showCreate = value;
  }
}
