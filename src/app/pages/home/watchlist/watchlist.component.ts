import { Component, OnInit } from '@angular/core';

import { MarketService } from '../../../core/services/market.service';
import { Market } from '../../../core/models/market';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  markets: Market[] = [];

  constructor(private marketService: MarketService) {
  }

  ngOnInit() {
    this.marketService.getMarkets().subscribe((markets: Market[]) => {
      this.markets = markets;
    }, error => {
      console.log(error);
    });
  }

}
