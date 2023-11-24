import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Pet} from "../../models/pet";
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-setup-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  pet: Pet | null = null;
  sendTextForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private formBuilder: FormBuilder
  ) {
    this.sendTextForm = this.formBuilder.group({
      message: ['', Validators.required] // Add the form control for the message input with required validator
    });
  }

  ngOnInit()
    :
    void {
    this.route.params.subscribe(params => {
      const petName = params['name'];
      // Fetch the pet details
      this.petService.getPetByName(petName).subscribe(
        pet => this.pet = pet,
        error => console.error('Error fetching pet:', error)
      );
    });
  }

  onSubmit(): void {
    if (this.pet) {
      // Send the pet's name to the backend
      this.petService.sendWhatsApp(this.pet?.name).subscribe({
        next: () => console.log('Text sent successfully for', this.pet?.name),
        error: error => console.error('Error sending text:', error)
      });
    }
  }
}
