import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { IntercambioComponent } from './intercambio/intercambio.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Registro', component: RegistroComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Intercambio', component: IntercambioComponent },
];
