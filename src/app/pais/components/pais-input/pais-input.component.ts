import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  ngOnInit(): void {
    this.debouncer.subscribe(termino => {
      console.log('debouncer: ', termino)
    })
  }

  @Output() onEnter   : EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  debouncer: Subject<string> = new Subject

  termino: string = ''
  paises : Country[] = []

  buscar(): void {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(event: any) {

  }


}
