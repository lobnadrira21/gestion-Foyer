import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Etudiant, EtudiantService } from '../etudiant.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './etudiant-add.component.html',
  styleUrl: './etudiant-add.component.css'
})
export class EtudiantAddComponent {
  newEtudiant: Etudiant = {
    nomEtudiant: '',
    prenomEtudiant: '',
    cinEtudiant: 0,

  };
  constructor(private etudiantService: EtudiantService) {}

  addEtudiant() {
    this.etudiantService.addEtudiant(this.newEtudiant).subscribe(response => {
      console.log('Étudiant ajouté', response);
      this.newEtudiant = {
        nomEtudiant: '',
        prenomEtudiant: '',
        cinEtudiant: 0,

      };
    });
  }
}


