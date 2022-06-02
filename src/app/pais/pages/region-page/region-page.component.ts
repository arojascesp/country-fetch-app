import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styles: [
  ]
})
export class RegionPageComponent implements OnInit {

  regionActiva: string = ''
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  paises: Country[] = []
  hayError: boolean = false
  termino: string = ''

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hayError = false
    this.termino = termino

    this.paisService.buscarRegion(this.termino)
      .subscribe(paises => {
        this.paises = paises
      }, error => {
        this.hayError = true
        this.paises = []
        console.log('Error!')
        console.info(error)
      })
  }

  selectRegion(region: string): void {
    this.regionActiva = region
    this.buscar(this.regionActiva)
  }

  getClaseCSS(region: string): string {
    return region === this.regionActiva
          ? 'btn btn-primary m-1'
          : 'btn btn-outline-primary m-1'
  }

}
