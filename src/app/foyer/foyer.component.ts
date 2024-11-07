import { Component } from '@angular/core';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class Foyer {
  // Vous pouvez ajouter des propriétés ou des méthodes spécifiques à ce composant ici
}

export interface Foyer {
  id?: number;
  nomFoyer: string;
  capaciteFoyer: number;
  // Autres propriétés de votre modèle de foyer
}
