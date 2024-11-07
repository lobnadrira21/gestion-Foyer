import { Component, OnInit } from '@angular/core';
import { Foyer, FoyerService } from '../../services/foyer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-foyer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-foyer.component.html',
  styleUrl: './list-foyer.component.css'
})
export class ListFoyerComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.loadFoyers();
  }

  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe((data: Foyer[]) => {
      this.foyers = data;
    });
  }

  deleteFoyer(id: number) {
    this.foyerService.deleteFoyer(id).subscribe(() => {
      this.loadFoyers();
    });
  }
}
