import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import {environment} from "../../environments/environment";// make sure the path is correct

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl: string;
  constructor( private http: HttpClient) {
    console.log("KVS petservice")
    this.apiUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }
}
