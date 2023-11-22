import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { PetService } from '../services/pet.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent {
  pets$: Observable<Pet[]>; // Observable of pets

  constructor(private petService: PetService) {
    this.pets$ = this.petService.getPets(); // Directly assign the observable from the service
  }
}
