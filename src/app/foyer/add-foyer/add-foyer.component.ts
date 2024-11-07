import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer, FoyerService } from '../../services/foyer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-foyer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-foyer.component.html',
  styleUrl: './add-foyer.component.css'
})
export class AddFoyerComponent {
  foyer: Foyer = {
    nomFoyer: '',
    capaciteFoyer: 0
  };

  constructor(private foyerService: FoyerService, private router: Router) {}

  saveFoyer() {
    this.foyerService.addFoyer(this.foyer).subscribe(() => {
      this.router.navigate(['/foyer-list']);
    });
  }
}

