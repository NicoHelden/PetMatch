import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { PetService } from '../services/pet.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  pets$: Observable<Pet[]>; // Use the $ suffix to denote an Observable. This is the observable that the async pipe will subscribe to
  selectedPet: Pet | null = null; // For storing the selected pet
  searchTerm: string = ''; // new search term property

  constructor(private petService: PetService) {
    this.pets$ = this.petService.getPets(); // This is the observable that the async pipe will subscribe to
  }

  ngOnInit(): void {
    // If you need to do something with the pets data immediately when the component loads, you can subscribe here
    // Otherwise, the async pipe in the template will handle the subscription
  }

  // Method to handle selecting a pet
  selectPet(pet: Pet): void {
    this.selectedPet = pet;
  }

}
