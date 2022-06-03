import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PaisPageComponent {

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
    this.termino = termino
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
    err => this.paisesSugeridos = [])
  }

}
