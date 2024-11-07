import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajoutez cet import
import { FoyerService } from './foyer.service'; // Import du service
import { Foyer } from './foyer/foyer.component'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('nomFoyer') nomFoyerRef!: ElementRef;
  @ViewChild('capaciteFoyer') capaciteFoyerRef!: ElementRef;

  // Déclarez un tableau pour stocker les foyers
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) {}

  // Méthode pour récupérer les foyers depuis l'API
  ngOnInit() {
    this.getFoyers();
  }

  // Récupérer les foyers via le service
  getFoyers() {
    this.foyerService.getFoyers().subscribe((data: Foyer[]) => {
      this.foyers = data; // Met à jour la liste des foyers
    });
  }

  onSubmit() {
    const nomFoyer = this.nomFoyerRef.nativeElement.value;
    const capaciteFoyer = this.capaciteFoyerRef.nativeElement.value;

    // Créer un nouvel objet Foyer
    const newFoyer: Foyer = { nomFoyer, capaciteFoyer };

    // Envoyer les données du nouveau foyer à l'API
    this.foyerService.createFoyer(newFoyer).subscribe((data: Foyer) => {
      // Ajouter le foyer créé à la liste locale
      this.foyers.push(data);

      // Réinitialiser les champs après soumission
      this.nomFoyerRef.nativeElement.value = '';
      this.capaciteFoyerRef.nativeElement.value = '';
    });
  }
}
