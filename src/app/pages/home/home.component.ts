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

  constructor(
    private pokemonService: PokemonService
  ) {
    this.suscripcion = this.pokemonService.recibirTerminoBusqueda().subscribe(data => {
      this.idAuthor = data;
      this.getPokemons();
      })
   }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemonByIdAutor(this.idAuthor).subscribe(
      res => {
        this.pokemons = res;
        console.log(res);
      },
      err => {
        console.log(err);
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
}
