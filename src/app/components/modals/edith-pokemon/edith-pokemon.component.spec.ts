import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithPokemonComponent } from './edith-pokemon.component';

describe('EdithPokemonComponent', () => {
  let component: EdithPokemonComponent;
  let fixture: ComponentFixture<EdithPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
