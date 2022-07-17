import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../../model/pokemon-model';
import { HttpsService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private https: HttpsService) { }

getPokemonByIdAutor(idAutor: number): Observable<Array<PokemonModel>> {
  console.log(`?idAuthor=${idAutor}`);
  return this.https.get({
    url: `?idAuthor=${idAutor}`
  });
}

createPokemon(idAutor: number, pokemon: PokemonModel): Observable<PokemonModel> {
  return this.https.post({
    url: `?idAuthor=${idAutor}`,
    data: pokemon
  });
}

editPokemon(idPokemon: number, pokemon: PokemonModel): Observable<PokemonModel> {
  return this.https.put({
    url: `${idPokemon}`,
    data: pokemon
  });
}

deletePokemon(idPokemon: number): Observable<PokemonModel> {
  return this.https.delete({
    url: `${idPokemon}`
  });
}
}