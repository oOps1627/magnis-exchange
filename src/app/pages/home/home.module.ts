import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradeMarketsComponent } from './trade-markets/trade-markets.component';
import { CopyTradersComponent } from './copy-traders/copy-traders.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { FeaturesModule } from '../../features/features.module';
import { SettingsModule } from './settings/settings.module';
import {DirectivesModule} from '../../shared/directives/directives.module';

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
    MatMenuModule,
    ComponentsModule,
    FeaturesModule,
    SettingsModule,
    DirectivesModule
  ]
})
export class HomeModule {
}
