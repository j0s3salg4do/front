import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { TeatroDetail } from './TeatroDetail';

@Injectable({
    providedIn: 'root'
})
export class TeatroService {
    private apiUrl = environment.baseUrl + '/teatros';

    constructor(private http: HttpClient) { }

    getTeatro(): Observable<TeatroDetail[]> {
        return this.http.get<TeatroDetail[]>(this.apiUrl);
    }
    getTeatroDetail(id: number): Observable<TeatroDetail> {
        return this.http.get<TeatroDetail>(`${this.apiUrl}/${id}`);
    }
}