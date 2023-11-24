import { Routes } from '@angular/router';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {SetupDateComponent} from "./date/setup-date/setup-date.component";


export const routes: Routes = [
  { path: '', component: ProfileGalleryComponent },
  { path: 'setup-date/:name', component: SetupDateComponent }, // Add this line

];
