import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './general/general.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      {path: 'general', component: GeneralComponent},
      {path: 'account', component: AccountComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
