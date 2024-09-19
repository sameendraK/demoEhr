import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ProductsComponent } from './components/products/products.component';
import { MessagesComponent } from './components/messages/messages.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: 'Transactions',
        component: TransactionsComponent
    },
    {
        path: 'Products',
        component: ProductsComponent
    },
    {
        path: 'Messages',
        component: MessagesComponent
    },
];
