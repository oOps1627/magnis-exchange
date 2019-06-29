import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { GeneralComponent } from './general/general.component';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FeaturesModule } from '../../../features/features.module';

@NgModule({
  declarations: [AccountComponent, GeneralComponent, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FeaturesModule
  ]
})
export class SettingsModule { }
