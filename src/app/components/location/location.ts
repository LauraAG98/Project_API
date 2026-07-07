import { Component } from '@angular/core';
import { LocationService } from '../../services/location';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
  //Se crea variable para guardar la información
  locations: any [] = []

  //Se inyecta el servicio
  constructor(private location: LocationService) { }

  //Método que permite obtener ubicaciones
  ngOnInit() {
    this.location.getLocations().subscribe((res: any) => {
      this.locations = res.results 
    })
  }
}