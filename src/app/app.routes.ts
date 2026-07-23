import { Routes } from '@angular/router';
import { Character } from './components/character/character';
import { Episode } from './components/episode/episode';
import { Location } from './components/location/location';
import { Nav } from './shared/nav/nav';
import { Login } from './components/login/login';

export const routes: Routes = [
{ path: '', component: Login },
{ path: 'app-character', component: Character},
{ path: 'app-episode', component: Episode},
{ path: 'app-location', component: Location },
{ path: 'app-character/:page', component: Character },
{ path: 'app-nav', component: Nav },
{ path: 'app-episode/:page', component: Episode},
{ path: 'app-location/:page', component: Location},
];