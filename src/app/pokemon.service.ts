import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon/pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );

  }
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put('api/pokemons', pokemon, httOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    )
  }
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httOptions).pipe(
       tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    )
  }

  deletetPokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    )
  }

private log(response:Pokemon[]|any) {
  console.table(response);

}
  private handleError(error:Error, errorValue:any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[]{
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insect",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy"];
  }
}