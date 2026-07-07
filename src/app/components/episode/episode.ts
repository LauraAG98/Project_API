import { Component } from '@angular/core';
import { EpisodeService } from '../../services/episode';

@Component({
  selector: 'app-episode',
  imports: [],
  templateUrl: './episode.html',
  styleUrl: './episode.css',
})
export class Episode {
  //Se crea variable para guardar la información
  episodes: any [] = []
  
  //Se inyecta el servicio
  constructor (private episodeService: EpisodeService) {}

  //Método que permite obtener los episodios.
  ngOnInit(){
    this.episodeService.getEpisodes().subscribe((res: any) =>{
      this.episodes = res.results
    })
  }
}
