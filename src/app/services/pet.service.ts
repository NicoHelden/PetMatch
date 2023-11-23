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
}
