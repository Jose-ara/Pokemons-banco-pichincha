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
  return this.https.get({
    url: `?idAuthor=${idAutor}`
  });
}

}
