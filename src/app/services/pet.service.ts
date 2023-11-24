import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Pet } from '../models/pet';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    console.log("KVS petservice")
    this.apiUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl).pipe(
      map(pets => pets.sort((a, b) => a.name.localeCompare(b.name)))
    );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  getPetByName(name: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${name}`);
  }
  sendWhatsApp(name: string): Observable<any> {
    const whatsappData = { name }; // Structure as expected by the backend
    return this.http.post<any>(this.apiUrl + '/sendText', whatsappData);
  }
  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
