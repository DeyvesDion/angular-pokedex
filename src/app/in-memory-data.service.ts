import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-Memory-web-api'
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb() {
  const pokemons = POKEMONS
   return  {pokemons};
}
}
