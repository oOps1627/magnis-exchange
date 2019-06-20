import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuardService], loadChildren: './pages/home/home.module#HomeModule'},
  {path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
