import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Etudiant {
  idEtudiant?: number;
  nomEtudiant: string;
  prenomEtudiant: string;
  cinEtudiant: number;
}

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8089/tpfoyer/etudiant';

  constructor(private http: HttpClient) {}

  // Récupérer tous les étudiants
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/retrieve-all-etudiants`);
  }

  // Ajouter un nouvel étudiant
  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/add-etudiant`, etudiant);
  }
}
