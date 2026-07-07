import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './components/character/character';
import { Episode } from './components/episode/episode';
import { Location } from './components/location/location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Character, Episode, Location],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectAPI');
}
