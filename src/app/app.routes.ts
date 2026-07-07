import { Routes } from '@angular/router';
import { Character } from './components/character/character';
import { Episode } from './components/episode/episode';
import { Location } from '@angular/common';

export const routes: Routes = [
{ path: '', component: Character},
{ path: 'app-episode', component: Episode},
{ path: 'app-location', component: Location },
{ path: ':page', component: Character }
];
