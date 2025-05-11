import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from './funcion';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {
  private apiUrl: string = environment.baseUrl + '/funciones';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.apiUrl);
  }
}
