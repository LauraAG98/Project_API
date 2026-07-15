import { Component } from '@angular/core';
import { EpisodeService } from '../../services/episode';
import { EpisodeInterface } from '../../models/episode.interface';
import { InfoInterface } from '../../models/info.Interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-episode',
  imports: [FormsModule],
  templateUrl: './episode.html',
  styleUrl: './episode.css',
})
export class Episode {
  //Variable
  page: number = 1;
  search: string = '';

  //Se crea variable para guardar la información
  episodes: EpisodeInterface[] = [];
  info?: InfoInterface;

  //Se inyecta el servicio
  constructor(private episodeService: EpisodeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //Método que permite obtener los episodios.
  loadEpisodes() {
    this.episodeService.getEpisodes(this.page).subscribe((res) => {
      this.episodes = res.results;
      this.info = res.info;
    })
  }

  //Método que obtiene la página de la url y actualiza la variable para mostrar los episodios
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = Number(params.get('page'));
      this.page = page || 1;
      this.loadEpisodes();
    })
  }

  //Método que muestra los episodios de la siguiente página
  nextPage() {
    if (this.info && this.page < this.info.pages) {
      this.router.navigate(['app-episode',this.page + 1])
    }
  }

  //Método que muestra los episodios de la página anterior
  previouspage() {
    if (this.page > 1) {
      if (this.page === 2) {
        this.router.navigate(['app-episode']);
      } else {
        this.router.navigate(['app-episode',this.page - 1])
      }
    }
  }

  //Se agrega condición para determinar qué busca el usuario y que se debe mostrar
  searchInformation() {
    if (this.search === '') {
      this.loadEpisodes();
    } else if (isNaN(Number(this.search))) {
      this.episodeService.getEpisodeByName(this.search).subscribe((res) => {
        this.episodes = res.results;
      })
    } else {
      this.episodeService.getEpisodeById(Number(this.search)).subscribe((res) => {
        this.episodes = [res];
      })
    }
  }
}
