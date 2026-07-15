import { Component } from '@angular/core';
import { LocationService } from '../../services/location';
import { LocationInterface } from '../../models/location.interface';
import { InfoInterface } from '../../models/info.Interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-location',
  imports: [FormsModule],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
  //Variable
  page: number = 1;
  search: string = '';

  //Se crea variable para guardar la información
  locations: LocationInterface[] = []
  info?: InfoInterface;

  //Se inyecta el servicio
  constructor(private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router) { }


  //Método que permite obtener ubicaciones
  loadLocation() {
    this.locationService.getLocations(this.page).subscribe((res) => {
      this.locations = res.results;
      this.info = res.info;
    })
  }

  //Método que obtiene la página de la url y actualiza la variable para mostrar ubicaciones
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = Number(params.get('page'));
      this.page = page || 1;
      this.loadLocation();
    })
  }

  //Método que muestra las ubicaciones de la siguiente página
  nextPage() {
    if (this.info && this.page < this.info.pages) {
      this.router.navigate(['app-location',this.page + 1])
    }
  }

  //Método que muestra las ubicaciones de la página anterior
  previouspage() {
    if (this.page > 1) {
      if (this.page === 2) {
        this.router.navigate(['app-location']);
      } else {
        this.router.navigate(['app-location',this.page - 1])
      }
    }
  }

  //Método que realiza peticion a service para obtener ubicación
  searchInformation(){
    if(this.search === ''){
      this.loadLocation();
    } else if(this.search.includes(',')){

      const ids = this.search.split(',').map(Number);
      
      this.locationService.getMultipleLocations(ids).subscribe((res) => {
        this.locations = res;
      })
    } else {
      this.locationService.getLocationById(Number(this.search)).subscribe((res) => {
        this.locations = [res];
      })
    }
  }
}