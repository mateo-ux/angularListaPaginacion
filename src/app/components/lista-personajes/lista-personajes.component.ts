import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PersonajeComponent } from '../personaje/personaje.component';



@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [
    MaterialModule,
    HttpClientModule,
  ],
  providers: [RickAndMortyService],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.scss'
})
export class ListaPersonajesComponent implements OnInit{

  listaPersonajes: any = {};


  constructor(
    private RyM: RickAndMortyService,
    private dialog: MatDialog,
    private urlNext: RickAndMortyService
    ){}

    ngOnInit(): void {
      this.RyM.obtenerPersonajes().subscribe({
       next: (data: any) => {
         this.listaPersonajes = data;
         console.log(this.listaPersonajes)
       },
       error: (err: any) => {
         console.log(err);
       }
      })
     }
 

     openDialog(id: string) {
      this.dialog.open(PersonajeComponent, {
        data: {
          id
        },
      });
    }

    siguientePagina(nextUrl: string): void {
      this.urlNext.nextPage(nextUrl).subscribe({
        next: (url: any) => {
          this.listaPersonajes = url;
          console.log(this.listaPersonajes)
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
}
