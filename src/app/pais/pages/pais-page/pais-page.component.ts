import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styleUrls: [
  ]
})
export class PaisPageComponent {

  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []


  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false
    this.termino = termino

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        // console.log(paises)
        this.paises = paises
      } , err => {
        this.hayError = true
        this.paises = []
        console.log('Error')
        console.info(err)
      })
    this.termino = ''
  }

  sugerencias(termino: string) {
    this.hayError = false
    // TODO: Crear sugerencias
  }

}
