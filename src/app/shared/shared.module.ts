import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
