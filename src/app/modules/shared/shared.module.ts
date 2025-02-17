import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//componentes de material 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
