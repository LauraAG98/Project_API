import { Routes } from '@angular/router';
import { Character } from './components/character/character';
import { Episode } from './components/episode/episode';

export const routes: Routes = [
{ path: 'app-character', component: Character},
{ path: 'app-episode', component: Episode},
{ path: 'app-location', component: Location }
];
