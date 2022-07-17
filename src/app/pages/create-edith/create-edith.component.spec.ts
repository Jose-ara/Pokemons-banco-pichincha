import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEdithComponent } from './create-edith.component';

describe('CreateEdithComponent', () => {
  let component: CreateEdithComponent;
  let fixture: ComponentFixture<CreateEdithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEdithComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEdithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close component create edit', () => {
    component.show = true;
    component.close();
    expect(component.show).toEqual(false);
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
    expect(component.createPokemon(objPokemon)).toBeTruthy();
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
    expect(component.editPokemon(objPokemon)).toBeTruthy();
  });
});