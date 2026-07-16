import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [AsyncPipe],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading {
  //Observable que se usa para mostrar u ocultar el spinner
  loading$;
  
  //Se inyecta servicio
  constructor (private loadingService: LoadingService) {
    //Se trae el estado de carga del servicio para mostrar en el componente
    this.loading$= this.loadingService.loading$;
  }
}
