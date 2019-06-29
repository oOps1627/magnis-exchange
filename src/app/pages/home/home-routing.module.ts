import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeMarketsComponent } from './trade-markets/trade-markets.component';
import { CopyTradersComponent } from './copy-traders/copy-traders.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'watchlist', component: WatchlistComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'trade-markets', component: TradeMarketsComponent},
      {path: 'copy-traders', component: CopyTradersComponent},
      {path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
      {path: '', redirectTo: 'watchlist', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
