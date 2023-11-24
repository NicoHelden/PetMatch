import {Pipe, PipeTransform} from '@angular/core';
import {Pet} from "../models/pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchString: string): Pet[] {
    if (!pets) {
      // Return an empty array if pets is null
      return [];
    }

    if (!searchString) {
      // Return all pets if searchString is empty
      return pets;
    }

    searchString = searchString.toLowerCase();

    return pets.filter(pet =>
      pet.name.toLowerCase().includes(searchString));

  }

}
