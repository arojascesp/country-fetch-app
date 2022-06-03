import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject

  termino: string = ''
  paises : Country[] = []



  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(termino => {
        this.onDebounce.emit(termino)
    })
  }

  buscar(): void {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada() {
    this.debouncer.next( this.termino )
  }


}
