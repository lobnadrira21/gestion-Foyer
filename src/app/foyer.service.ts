import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from './foyer/foyer.component'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://192.168.0.130:8089/tpfoyer/foyer'; // L'URL de votre API Spring (mettre à jour avec le bon port)

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste de tous les foyers
  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/retrieve-all-foyers`); // Correct URL
  }

  // Méthode pour récupérer un foyer par son ID
  getFoyerById(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/retrieve-foyer/${id}`); // Correct URL
  }

  // Méthode pour créer un nouveau foyer
  createFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add-foyer`, foyer); // Correct URL
  }

  // Méthode pour mettre à jour un foyer existant
  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}/modify-foyer`, foyer); // Correct URL
  }

  // Méthode pour supprimer un foyer
  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-foyer/${id}`); // Correct URL
  }
}
