import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Boleto } from './boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private apiUrl = environment.baseUrl + '/boletos';

  constructor( private http: HttpClient) { }

  findAll(): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(this.apiUrl);
  }

}
