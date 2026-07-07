import { Component } from '@angular/core';
import { EpisodeService } from '../../services/episode';
import { EpisodeInterface } from '../../models/episode.interface';

@Component({
  selector: 'app-episode',
  imports: [],
  templateUrl: './episode.html',
  styleUrl: './episode.css',
})
export class Episode {
  //Se crea variable para guardar la información
  episodes: EpisodeInterface [] = []
  
  //Se inyecta el servicio
  constructor (private episodeService: EpisodeService) {}

  //Método que permite obtener los episodios.
  ngOnInit(){
    this.episodeService.getEpisodes().subscribe((res) =>{
      this.episodes = res.results
    })
  }
}
