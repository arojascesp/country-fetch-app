import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CapitalPageComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  // sugerencias
  paisesSugeridos: Country[] = []
  mostrarSugerencias: boolean = false

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false
    this.termino = termino
    this.mostrarSugerencias = false

    this.paisService.buscarCapital(this.termino)
      .subscribe(paises => {
        this.paises = paises
      }, err => {
        this.hayError = true
        this.paises = []

        console.log('Error!')
        console.info(err)
      })

    this.termino = ''
  }

  sugerencias(termino: string) {
    this.hayError = false
    this.termino = termino
    this.mostrarSugerencias = true

    this.paisService.buscarCapital(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
        err => this.paisesSugeridos = [])
  }


}
