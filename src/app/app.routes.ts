import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProductsComponent } from './components/products/products.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'patients',
        component: PatientsComponent
    },
    {
        path: 'doctors',
        component: DoctorsComponent
    },
    {
        path: 'clinic',
        component: ClinicComponent
    },
];
