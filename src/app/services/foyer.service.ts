import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Foyer {
  idFoyer?: number;
  nomFoyer: string;
  capaciteFoyer: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = `${environment.apiUrl}/foyer`;

  constructor(private http: HttpClient) {}

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/retrieve-all-foyers`);
  }

  getFoyer(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/retrieve-foyer/${id}`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add-foyer`, foyer);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}/modify-foyer`, foyer);
  }

  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-foyer/${id}`);
  }
}
