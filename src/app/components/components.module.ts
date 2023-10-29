import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
