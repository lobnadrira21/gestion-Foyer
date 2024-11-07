import { Routes } from '@angular/router';
import { EtudiantsListComponent } from './etudiants-list/etudiants-list.component';
import { EtudiantAddComponent } from './etudiant-add/etudiant-add.component';

export const routes: Routes = [
  { path: 'etudiants', component: EtudiantsListComponent },
  { path: 'ajouter-etudiant', component: EtudiantAddComponent },
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' }
];
