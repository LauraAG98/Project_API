import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseAPI } from '../models/respondeAPI.interface';
import { CharacterInterface } from '../models/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  //Se inyecta dependencia
  constructor(private http: HttpClient) { }
  
  //Método para obtener paginación
  getCharacters(page: number = 1) {
    return this.http.get<ResponseAPI<CharacterInterface>>(`${environment.apiUrl}/character?page=${page}`); 
  }

  //Método para obtener personaje por id
  getCharacterById(id: number) {
    return this.http.get<CharacterInterface>(`${environment.apiUrl}/character/${id}`);
  }

  //Método para obtener personaje por nombre
  getCharacterByName(name: string) {
    return this.http.get<ResponseAPI<CharacterInterface>>(`${environment.apiUrl}/character?name=${name}`)
  }

  //Método para obtener personaje por estado
  getCharacterByStatus(status: string) {
    return this.http.get<ResponseAPI<CharacterInterface>>(`${environment.apiUrl}/character?status=${status}`)
  }

  //Método para obtener por género
  getCharacterByGender(gender: string) {
    return this.http.get<ResponseAPI<CharacterInterface>>(`${environment.apiUrl}/character?gender=${gender}`) 
  }
}