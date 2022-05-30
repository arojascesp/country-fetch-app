import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalPageComponent,
    RegionPageComponent,
    PaisPageComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    CapitalPageComponent,
    RegionPageComponent,
    PaisPageComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
