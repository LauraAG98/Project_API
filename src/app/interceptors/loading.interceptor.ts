import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "../services/loading";
import { finalize } from "rxjs";

/* 
*Se exporta el interceptor
*Indica que la constante tiene la estructura de un interceptor
*/
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  //Inyección de dependencia
  const loadingService = inject(LoadingService);

  //Muestra el estado de carga antes de que salga la petición
  loadingService.showLoading();

  //La petición continua, y oculta el estado de carga independientemente de la respuesta de la API
  return next(req).pipe(finalize(()=> {
    loadingService.hideLoading();
  }))
};