import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic/graphic.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GraphicComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraphicComponent
  ]
})
export class ComponentsModule {
}
