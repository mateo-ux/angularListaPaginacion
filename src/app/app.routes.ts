import { Routes } from '@angular/router';
import path from 'path';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';

export const routes: Routes = [
    {
        path:'',
        component: ListaPersonajesComponent
    }
];
