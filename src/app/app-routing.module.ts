import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CapitalPageComponent } from './pais/pages/capital-page/capital-page.component'
import { PaisPageComponent } from './pais/pages/pais-page/pais-page.component'
import { RegionPageComponent } from './pais/pages/region-page/region-page.component'
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component'

const routes: Routes = [
  {
    path: '',
    component: PaisPageComponent,
    pathMatch: 'full'
  }, {
    path: 'region',
    component: RegionPageComponent
  }, {
    path: 'capital',
    component: CapitalPageComponent
  }, {
    path: 'pais/:id',
    component: VerPaisComponent
  }, {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
