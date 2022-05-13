import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html', 
})
export class ListePokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
  private pokemonService: PokemonService
  ) { }
  ngOnInit(){
    this.pokemonList =this.pokemonService.getPokemonList();
  }
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
