import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  //Variable que contiene el usuario
  private user : string = '';

  //Método que guarda el usuario que ya inicio sesión
  login (user: string){
    this.user = user;
  }
}
