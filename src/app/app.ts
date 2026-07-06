import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './components/character/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Character],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectAPI');
}
