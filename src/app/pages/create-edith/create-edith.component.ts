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
    "defense": 13,
    "hp": 100,
    "type": "Golden",
    "idAuthor": 1
  };

  public title = 'Nuevo Pokemon';
  public hp = 60;
  public isEdit = false;

  @Input() pokemonIn: PokemonModel = this.objPokemon;

  public formPokemon = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    attack: new FormControl('', [Validators.required]),
    defense: new FormControl('', [Validators.required])
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

  //falta test
  changeAttack(event: any){
      this.pokemonIn.attack = event.target.value 
  }

  //falta test
  changeDefense(event: any){
    this.pokemonIn.defense = event.target.value
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
        this.formPokemon.reset();
      },
      err => {
        console.log(err);
        this.formPokemon.reset();
      }
    );
  }

}