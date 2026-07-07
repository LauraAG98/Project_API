import { Component } from '@angular/core';
import { CharacterService } from '../../services/character';
import { CharacterInterface } from '../../models/character.interface';
import { InfoInterface } from '../../models/info.Interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  page: number = 1;

   //Se inyecta el servicio
  constructor(private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

  //Método que obtiene la página de la url y actualiza la variable para mostrar los personajes
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = Number(params.get('page'));
      this.page = page || 1;
      this.loadCharacters();
    })
  }

  //Método que muestra los personajes de la siguiente página
  nextPage() {
    if (this.info && this.page < this.info.pages) {
      this.router.navigate([this.page + 1])
    }
  }

  //Método que muestra los personajes de la página anterior
  previouspage() {
    if (this.page > 1) {
      if(this.page === 2) {
        this.router.navigate(['']);
      } else {
        this.router.navigate([this.page - 1])
      }
    }
  }
}