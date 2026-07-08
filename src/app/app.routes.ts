import { Routes } from '@angular/router';
import { Character } from './components/character/character';
import { Episode } from './components/episode/episode';
import { Location } from '@angular/common';
import { Nav } from './shared/nav/nav';

export const routes: Routes = [
{ path: '', component: Character},
{ path: 'app-episode', component: Episode},
{ path: 'app-location', component: Location },
{ path: ':page', component: Character },
{ path: 'app-nav', component: Nav },
{ path: 'app-episode/:page', component: Episode},
];
