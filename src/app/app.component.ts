import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  goToEtudiantList() {
    this.router.navigate(['/etudiants']);
  }

  goToAddEtudiant() {
    this.router.navigate(['/ajouter-etudiant']);
  }
}
