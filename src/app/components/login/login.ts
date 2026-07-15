import { Component } from '@angular/core';
import { LoginService } from '../../services/login'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //Variables
  user: string = '';
  password: string = '';

  //Se inyectan los servicios
  constructor (private loginService: LoginService, private router: Router){}

  //Método que redirige a la siguiente vista
  login(){
    this.loginService.login(this.user);
    this.router.navigate(['/app-character']);
  }

  //Booleano que indica que el texto inicialmente no se ve
   showPassword = false;

  //Método que alterna visibilidad de la contraseña
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}