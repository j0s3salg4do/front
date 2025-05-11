import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ObraDetail } from './ObraDetail';

@Injectable({
    providedIn: 'root'
})
export class ObraTeatroService {
    private apiUrl = environment.baseUrl + '/obrasDeTeatro';

    constructor(private http: HttpClient) { }

    getObrasDeTeatro(): Observable<ObraDetail[]> {
        return this.http.get<ObraDetail[]>(this.apiUrl);
    }
    getObraDetail(id: number): Observable<ObraDetail> {
        return this.http.get<ObraDetail>(`${this.apiUrl}/${id}`);
    }
}