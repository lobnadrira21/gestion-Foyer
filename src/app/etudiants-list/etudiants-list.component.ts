import { Component,OnInit } from '@angular/core';
import { EtudiantService, Etudiant } from '../etudiant.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-etudiants-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiants-list.component.html',
  styleUrl: './etudiants-list.component.css'
})
export class EtudiantsListComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
}
