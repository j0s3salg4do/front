import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resena } from './resena';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {
    private apiUrl: string = environment.baseUrl + '/resenas';

    constructor(private http: HttpClient) { }

    getResenas(): Observable<Resena[]> {
        return this.http.get<Resena[]>(this.apiUrl);
    }

    getResenasPorObra(obraId: number): Observable<Resena[]> {
        return this.http.get<Resena[]>(`${this.apiUrl}/obra/${obraId}`);
    }
}
