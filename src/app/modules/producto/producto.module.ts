import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CardComponent } from './components/card/card.component';
import { CardBrasiersComponent } from './components/card-brasiers/card-brasiers.component';
import { CardBombachasComponent } from './components/card-bombachas/card-bombachas.component';
import { CardConjuntosComponent } from './components/card-conjuntos/card-conjuntos.component';
import { CardMediasComponent } from './components/card-medias/card-medias.component';
import { CardBoxersComponent } from './components/card-boxers/card-boxers.component';
import { BombachasComponent } from './pages/bombachas/bombachas.component';
import { BrasiersComponent } from './pages/brasiers/brasiers.component';
import { ConjuntosComponent } from './pages/conjuntos/conjuntos.component';
import { MediasComponent } from './pages/medias/medias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BoxersComponent } from './pages/boxers/boxers.component';



@NgModule({
  declarations: [
    CardComponent,
    CardBrasiersComponent,
    CardBombachasComponent,
    CardConjuntosComponent,
    CardMediasComponent,
    CardBoxersComponent,
    BombachasComponent,
    BrasiersComponent,
    ConjuntosComponent,
    MediasComponent,
    ProductosComponent,
    BoxersComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
