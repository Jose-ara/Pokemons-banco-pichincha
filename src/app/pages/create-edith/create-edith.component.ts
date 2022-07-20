import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonModel } from 'src/app/domain/model/pokemon-model';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edith',
  templateUrl: './create-edith.component.html',
  styleUrls: ['./create-edith.component.scss']
})
export class CreateEdithComponent implements OnInit {

  objPokemon: PokemonModel = {
    "name": "",
    "image": "",
    "attack": 0,
    "defense": 0,
    "hp": 100,
    "type": "Golden",
    "idAuthor": 1
  };

  public title = 'Nuevo Pokemon';
  public hp = 60;

  public formPokemon = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    attack: new FormControl('', [Validators.required]),
    defense: new FormControl('', [Validators.required])
  });

  @Input() pokemonIn: PokemonModel = this.objPokemon;
  @Input() show: boolean = false;

  @Output() closeEmit = new EventEmitter<boolean>();
  @Output() sendPokemon = new EventEmitter<PokemonModel>();

  constructor(
    private pokemonService: PokemonService,
    ) { }

  ngOnInit(): void {
  }

  close(value: boolean): void {
    this.closeEmit.emit(value);
  }

  changeAttack(event: any) {
    if (this.pokemonIn) {
      this.pokemonIn.attack = event.target.value;
    }
    else {
      this.objPokemon.attack = event.target.value;
    }
  }

  changeDefense(event: any) {
    if (this.pokemonIn) {
      this.pokemonIn.defense = event.target.value;
    }
    else {
      this.objPokemon.defense = event.target.value;
    }
  }

  editPokemon(): void {
    let pokemonOut: PokemonModel = { ...this.pokemonIn, "idAuthor": this.pokemonIn.id_author };
    if (this.formPokemon.get('name').value) pokemonOut.name = this.formPokemon.get('name').value;
    if (this.formPokemon.get('image').value) pokemonOut.image = this.formPokemon.get('image').value;
    if (this.formPokemon.get('attack').value) pokemonOut.attack = this.formPokemon.get('attack').value;
    if (this.formPokemon.get('defense').value) pokemonOut.defense = this.formPokemon.get('defense').value;

    this.pokemonService.editPokemon(pokemonOut.id, pokemonOut).subscribe(
      res => {
        this.formPokemon.reset();
        this.sendPokemon.emit(res);
        this.resetObj();
        this.close(false);
      },
      err => {
      }
    );
  }

  createPokemon(idAuthor: number): void {
    if (this.formPokemon.get('name').value == '') {
      Swal.fire('Debe agregar El nombre de pokemon');
    }
    if (this.formPokemon.get('image').value == '') {
      Swal.fire('Debe agregar la imagen del pokemon' );
    }
    let pokemon: PokemonModel = {
      ...this.formPokemon.getRawValue(),
      "hp": 100,
      "idAuthor": idAuthor,
      "type": "golden"
    };
    this.pokemonService.createPokemon(idAuthor, pokemon).subscribe(
      res => {
        this.formPokemon.reset();
        this.sendPokemon.emit(pokemon);
        this.close(false);
      },
      err => {
        this.formPokemon.reset();
      }
    );
  }

  resetObj() {
    this.objPokemon.attack = 0;
    this.objPokemon.defense = 0;
    this.objPokemon.name = "";
    this.objPokemon.image = "";
  }

}