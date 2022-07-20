import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpsService } from 'src/app/domain/services/http.service';
import { PokemonService } from 'src/app/domain/services/pokemon/pokemon.service';
import { CreateEdithComponent } from './create-edith.component';

describe('CreateEdithComponent', () => {
  
  let fixture: ComponentFixture<CreateEdithComponent>;
  let httpCliente: HttpClient;
  let http: HttpsService;
  let pokemonService : PokemonService;
  let component: CreateEdithComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEdithComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    http = new HttpsService(httpCliente);
    pokemonService = new PokemonService(http);
    fixture = TestBed.createComponent(CreateEdithComponent);
    component = new CreateEdithComponent(pokemonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close component create edit', () => {
    component.close(false);
    expect(component.closeEmit.emit()).toHaveBeenCalled();
  });

  it('should create pokemon', () => {
    let objPokemon = {
      "id": 454,
      "name": "Charizard",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
      "attack": 70,
      "defense": 33,
      "hp": 50,
      "type": "test",
      "id_author": 1
    };
    expect(component.createPokemon(objPokemon.id_author)).toBeTruthy();
  });

  it('should edit pokemon', () => {
    let objPokemon = {
      "id": 4540,
      "name": "Carpio",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
      "attack": 10,
      "defense": 5,
      "hp": 30,
      "type": "test",
      "id_author": 1
    };
    component.pokemonIn = {...objPokemon, "idAuthor": objPokemon.id_author };
    expect(component.editPokemon()).toBeTruthy();
  });
});