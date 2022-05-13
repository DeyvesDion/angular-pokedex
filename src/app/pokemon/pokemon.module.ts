import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePokemonComponent } from './liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { DorderCardDirective } from './dorder-card.directive';
import { PokemoTypeColorPipe } from './pokemo-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';


const pokemonRoutes: Routes = [
  { path: "pokemons", component: ListePokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent }
];

@NgModule({
  declarations: [
    ListePokemonComponent,
    DetailPokemonComponent,
    DorderCardDirective,
    PokemoTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
