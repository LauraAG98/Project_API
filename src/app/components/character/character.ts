import { Component } from '@angular/core';
import { CharacterService } from '../../services/character';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  //Se crea variable para guardar la información
  characters : any[] = [];

  //Se inyecta el servicio
  constructor (private characterService: CharacterService){}

  //Método que permite obtener los personajes.
  ngOnInit(){
    this.characterService.getCharacters().subscribe((res: any) => {
      this.characters = res.results
    });
  }
}