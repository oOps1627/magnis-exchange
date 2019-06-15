import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeMarketsComponent } from './trade-markets/trade-markets.component';
import { CopyTradersComponent } from './copy-traders/copy-traders.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComponentsModule } from '../../shared/components/components.module';


@NgModule({
  declarations: [
    WatchlistComponent,
    HomeComponent,
    PortfolioComponent,
    TradeMarketsComponent,
    CopyTradersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressBarModule,
    ComponentsModule
  ]
})
export class HomeModule {
}
