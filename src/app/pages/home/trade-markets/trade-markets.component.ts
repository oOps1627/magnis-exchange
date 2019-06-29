import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../../core/services/market.service';
import { Market } from '../../../core/models/market';

@Component({
  selector: 'app-trade-markets',
  templateUrl: './trade-markets.component.html',
  styleUrls: ['./trade-markets.component.scss']
})
export class TradeMarketsComponent implements OnInit {
  featuredMarkets: Market[] = [];
  constructor(private marketService: MarketService) { }

  ngOnInit() {
    this.marketService.getMarkets().subscribe(markets => {
      this.featuredMarkets = markets;
    });
  }

}
