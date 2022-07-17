import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonModel } from 'src/app/domain/model/pokemon-model';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';

@Component({
  selector: 'app-create-edith',
  templateUrl: './create-edith.component.html',
  styleUrls: ['./create-edith.component.scss']
})
export class CreateEdithComponent implements OnInit {

  objPokemon: PokemonModel = {
    "name": "pokemon 11",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
    "attack": 90,
    "defense": 93,
    "hp": 100,
    "type": "Golden",
    "idAuthor": 1
  };

  @Input() pokemonIn: PokemonModel = this.objPokemon;

  formPokemon: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    attack: new FormControl(null, [Validators.required]),
    defense: new FormControl(null, [Validators.required])
  });
  show: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.createPokemon(1, this.objPokemon);
    //this.editPokemon(909, this.objPokemon);
  }

  close(): void {
    this.show = false;
  }

  editPokemon(idAuthor: number, pokemon: PokemonModel): void {
    this.pokemonService.editPokemon(idAuthor, pokemon).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  createPokemon(idAuthor: number): void {
    let pokemon : PokemonModel = {
      ...this.formPokemon.getRawValue(),
      "hp": 100,
      "idAuthor": idAuthor,
      "type": "golden"
    };
    this.pokemonService.createPokemon(idAuthor, pokemon).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}