import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  //Se crea una variable que guarda y avisa sobre el valor actual del estado de carga
  private loadingSubject= new BehaviorSubject(false);

  //Método que notifica cuando el estado cambia a true
  showLoading(){
    this.loadingSubject.next(true);
  }
  
  //Método que notifica cuando el estado cambia a false
  hideLoading(){
    this.loadingSubject.next(false);
  }

  //Observable que permite que los componentes escuchen estado de carga sin modificar su valor
  loading$ = this.loadingSubject.asObservable();
}
