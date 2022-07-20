import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonModel } from 'src/app/domain/model/pokemon-model';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';
import { ModalConfirmComponent } from 'src/app/share/modal-confirm/modal-confirm.component';

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
  public pokemonEdit: PokemonModel;
  public confirmDeleteData: any = {
    "title": "Confirmar Eliminar",
    "text": "¿Esta seguro que desea eliminar este pokemon?",
  }

  @ViewChild(ModalConfirmComponent) modal: ModalConfirmComponent;

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

  getPokemons() {
    this.pokemonService.getPokemonByIdAutor(this.idAuthor).subscribe(
      res => {
        this.pokemons = res;
      },
      err => {
      }
    );
  }

  deletePokemon(value: any) {
    if (value.option) {
      let pokemon = value.pokemon;
      this.pokemonService.deletePokemon(pokemon.id).subscribe(res => {
        this.pokemons.splice(this.pokemons.indexOf(pokemon), 1);
      },
        err => {
        }
      );
    }
  }

  enviarTerminoBusqueda() {
    this.pokemonService.enviarTerminoBusqueda(this.idAuthor);
  }

  save() {
    this.showCreate = true;
  }

  updateTablePokemon(pokemon: PokemonModel) {
    let index: number;
    if (this.pokemons) {
      index = this.pokemons.indexOf(this.pokemonEdit ? this.pokemonEdit : pokemon);
      if (index == -1) {
        this.pokemons.push(pokemon);
      } else {
        this.pokemons[index] = pokemon;
      }
    }
    this.pokemonEdit = null;
  }

  updatePokemon(pokemon: PokemonModel) {
    this.pokemonEdit = pokemon;
    this.showCreate = true;
  }

  closeCreate(value: boolean) {
    this.showCreate = value;
    this.pokemonEdit = null;
  }

  ConfirmDelete(pokemon: PokemonModel) {
    this.confirmDeleteData = {
      ...this.confirmDeleteData,
      "pokemon": pokemon
    };
    this.modal.open();
  }
}