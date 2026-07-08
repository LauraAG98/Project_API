import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from "./shared/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectAPI');

  //Se Inyecta servicio
  constructor (private router: Router) {}

  //Indica si el componente se debe mostrar
  get showNav(): boolean{
    return this.router.url !== '/';
  }
}
