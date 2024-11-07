import { Routes } from '@angular/router';
import { ListFoyerComponent } from './foyer/list-foyer/list-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';

export const routes: Routes = [
    { path: '', redirectTo: '/foyer-list', pathMatch: 'full' },
    { path: 'foyer-list', component: ListFoyerComponent },
    { path: 'add-foyer', component: AddFoyerComponent },
  ];
  
