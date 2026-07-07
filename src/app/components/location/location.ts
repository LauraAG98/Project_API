import { Component } from '@angular/core';
import { LocationService } from '../../services/location';
import { LocationInterface } from '../../models/location.interface';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
  //Se crea variable para guardar la información
  locations: LocationInterface [] = []

  //Se inyecta el servicio
  constructor(private location: LocationService) { }

  //Método que permite obtener ubicaciones
  ngOnInit() {
    this.location.getLocations().subscribe((res) => {
      this.locations = res.results 
    })
  }
}