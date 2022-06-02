import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
  styles: [
  ]
})
export class CapitalPageComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false
    this.termino = termino

    this.paisService.buscarCapital(this.termino)
      .subscribe(paises => {
        this.paises = paises
        console.log(paises[0].cca2)
      }, err => {
        this.hayError = true
        this.paises = []

        console.log('Error!')
        console.info(err)
      })

    this.termino = ''
  }

}
