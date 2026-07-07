import { Component } from '@angular/core';
import { CharacterService } from '../../services/character';
import { CharacterInterface } from '../../models/character.interface';
import { InfoInterface } from '../../models/info.Interface';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  page: number = 1;

   //Se inyecta el servicio
  constructor(private characterService: CharacterService) { }

  //Se crea variable para guardar la información
  characters: CharacterInterface[] = [];
  info?: InfoInterface;
 
  //Método que permite obtener los personajes.
  loadCharacters() {
    this.characterService.getCharacters(this.page).subscribe((res) => {
      this.characters = res.results;
      this.info = res.info;
    });
  }

  //Método que carga los personajes
  ngOnInit() {
    this.loadCharacters();
  }

  //Método que muestra los personajes de la siguiente página
  nextPage() {
    if (this.info && this.page < this.info.pages) {
      this.page++;
      this.loadCharacters();
    }
  }

  //Método que muestra los personajes de la página anterior
  previouspage() {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters();
    } else {

    }

  }
}