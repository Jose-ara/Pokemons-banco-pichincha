import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonModel } from '../../model/pokemon-model';
import { HttpsService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

//falta estudiar el subject
private error = new Subject<string>();
private terminoBusqueda = new Subject<string>();

constructor(private https: HttpsService) { }

//falta test
/* setError(mensaje: string){
  this.error.next(mensaje);
} */

//falta test
enviarTerminoBusqueda(termino: string){
  this.terminoBusqueda.next(termino);
}

//falta test
recibirTerminoBusqueda(): Observable<string>{
  return this.terminoBusqueda.asObservable();
}

getPokemonByIdAutor(idAutor: string): Observable<Array<PokemonModel>> {
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