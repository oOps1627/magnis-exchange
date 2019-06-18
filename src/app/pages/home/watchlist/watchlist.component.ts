import { Component, OnInit } from '@angular/core';

import { MarketService } from '../../../core/services/market.service';
import { Market } from '../../../core/models/market';
import { MatDialog } from '@angular/material';
import { AddMarketModalComponent } from '../../../features/add-market-modal/add-market-modal.component';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  markets: Market[] = [];

  constructor(private marketService: MarketService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.marketService.getMarkets().subscribe((markets: Market[]) => {
      this.markets = markets;
    }, error => {
      console.log(error);
    });
  }

  private toggleWatchlistDropdown(target) {
    target.classList.toggle('dropdown_opened');
    target.classList.toggle('dropdown_closed');
  }

  private openModalAddMarket() {
    const dialogRef = this.dialog.open(AddMarketModalComponent, {
      width: '250px',
    });
  }

}
