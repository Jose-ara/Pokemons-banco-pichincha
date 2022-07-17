import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/domain/model/pokemon-model';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';

@Component({
  selector: 'app-create-edith',
  templateUrl: './create-edith.component.html',
  styleUrls: ['./create-edith.component.scss']
})
export class CreateEdithComponent implements OnInit {

  show : boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.editPokemon(null);
  }

  close() : void{
    this.show = false;
  }

  editPokemon(pokemon : PokemonModel) : void{
    this.pokemonService.getPokemonByIdAutor(1).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  createPokemon(newPokemon : PokemonModel){

  }

}