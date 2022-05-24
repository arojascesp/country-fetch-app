import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styles: [
  ]
})
export class PaisPageComponent {

  termino: string = ''
  hayError: boolean = false

  constructor(private paisService: PaisService) { }

  buscar(): void {
    this.hayError = false
    console.log(this.termino)

    if (this.termino.trim().length === 0) return
    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        console.log(resp)
      }, err => {
        this.hayError = true
        console.log('Error')
        console.info(err)
      })
    this.termino = ''
  }

}
