import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  isLoading = true; // Loading state indicator

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.fetchPets();
  }

  private fetchPets(): void {
    this.petService.getPets().subscribe({
      next: (petData: Pet[]) => {
        this.pets = petData;
        this.isLoading = false; // Data loaded, loading complete
      },
      error: (err) => {
        console.error('There was an error fetching the pets:', err);
        this.isLoading = false; // Error occurred, loading complete
      }
    });
  }
}
