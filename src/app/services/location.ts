import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseAPI } from '../models/respondeAPI.interface';
import { LocationInterface } from '../models/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  //Se inyecta la dependencia
  constructor (private http: HttpClient){}

  //Método que permite mostrar todas las ubicaciones
  getLocations(page: number = 1){
    return this.http.get<ResponseAPI<LocationInterface>>(`${environment.apiUrl}/location?page=${page}`)
  }

  //Método que permite elegir un solo una ubicación a través del id
  getLocationById(id: number){
    return this.http.get<LocationInterface>(`${environment.apiUrl}/location/${id}`)
  }

  //Método que permite elegir varias ubicaciones a través de id's
  getMultipleLocations(ids: number []){
    return this.http.get<LocationInterface[]>(`${environment.apiUrl}/location/${ids.join(",")}`)
  }
}
