import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { AddMarketModalComponent } from './add-market-modal/add-market-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SearchComponent, AddMarketModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [SearchComponent, AddMarketModalComponent],
  entryComponents: [
    AddMarketModalComponent
  ],
})
export class FeaturesModule {
}
