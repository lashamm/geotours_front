import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ToursComponent } from './pages/tours/tours';
import { TourDetailsComponent } from './pages/tour_Details/tour-details';
import { AdminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: TourDetailsComponent }, // Route for tour details
  // Admin route — stubbed, activate when backend is ready:
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard] },
  { path: '**', redirectTo: '' }
];
