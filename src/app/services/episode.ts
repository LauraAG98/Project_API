import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseAPI } from '../models/respondeAPI.interface';
import { EpisodeInterface } from '../models/episode.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  //Se inyecta la dependencia
  constructor(private http: HttpClient) { }

  //Método que permite mostrar todos los episodios
  getEpisodes(page: number = 1) {
    return this.http.get<ResponseAPI<EpisodeInterface>>(`${environment.apiUrl}/episode?page=${page}`)
  }

  //Método que permite elegir un solo episodio a través del id
  getEpisodeById(id: number) {
    return this.http.get<EpisodeInterface>(`${environment.apiUrl}/episode/${id}`)
  }

  //Método que permite elegir varios episodios a través de id's
  getMultipleEpisodes(ids: number[]) {
    return this.http.get<ResponseAPI<EpisodeInterface>>(`${environment.apiUrl}/episode?${ids.join(",")}`)
  }
}