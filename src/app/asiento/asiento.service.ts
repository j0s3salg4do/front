import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Asiento } from './asiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  private baseUrl: string = environment.baseUrl + '/teatros';

  constructor(private http: HttpClient) {}

  getAsientos(teatroId: number): Observable<Asiento[]> {
    return this.http.get<Asiento[]>(`${this.baseUrl}/${teatroId}/asientos`);
  }

  actualizarAsiento(teatroId: number, asiento: Asiento): Observable<Asiento> {
    return this.http.put<Asiento>(`${this.baseUrl}/${teatroId}/asientos/${asiento.id}`, asiento);
  }
}
