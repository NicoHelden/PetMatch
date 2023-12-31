import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { PetService } from '../services/pet.service';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NameFilterPipe, RouterLink],
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  pets$: Observable<Pet[]>; // Use the $ suffix to denote an Observable. This is the observable that the async pipe will subscribe to
  selectedPet: Pet | null = null; // For storing the selected pet
  searchTerm: string = ''; // new search term property
  addPetForm: FormGroup; // Add this line for FormGroup

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder // Add FormBuilder here
  ) {
    this.pets$ = this.petService.getPets();
    this.addPetForm = this.formBuilder.group({ // Initialize the FormGroup
      name: [''],
      kind: [''],
      image: [''],
      profileText: [''],
      popularity: ['']

      // Replace with actual form control names and default values
      // Add other form controls here
    });
  }

  ngOnInit(): void {
    // If you need to do something with the pets data immediately when the component loads, you can subscribe here
    // Otherwise, the async pipe in the template will handle the subscription
  }

  // Method to handle selecting a pet
  selectPet(pet: Pet): void {
    this.selectedPet = pet;
  }

  onAddPet(): void {
    if (this.addPetForm.valid) {
      this.petService.addPet(this.addPetForm.value).subscribe({
        next: addedPet => {
          alert('New pet added:');
          this.addPetForm.reset();
          // Re-fetch the list of pets and update the observable
          this.pets$ = this.petService.getPets();
        },
        error: err => console.error('Error adding pet:', err)
      });
    } else {
      // Handle invalid form here, if necessary
    }
  }


  deletePet(id: number): void {
    // Optional: Add user confirmation before deletion
    if (!confirm('Are you sure you want to delete this pet?')) {
      return;
    }

    this.petService.deletePet(id).subscribe({
      next: () => {
        // Handle successful deletion
        // Update the UI by removing the pet from the list
        this.pets$ = this.petService.getPets(); // Refresh the list of pets

        // Reset selected pet if it's the one being deleted
        if (this.selectedPet && this.selectedPet.id === id) {
          this.selectedPet = null;
        }

        // Optionally show a success message
        alert('Pet successfully deleted');
      },
      error: (error) => {
        // Handle error
        console.error('Error deleting pet:', error);
        // Optionally show an error message to the user
        alert('An error occurred while deleting the pet');
      }
    });
  }
}
