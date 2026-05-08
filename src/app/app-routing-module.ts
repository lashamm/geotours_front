import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ToursComponent } from './pages/tours/tours';
import { TourDetailsComponent } from './pages/tour_Details/tour-details';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: TourDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
