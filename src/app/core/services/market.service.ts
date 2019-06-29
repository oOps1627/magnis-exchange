import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Market } from "../models/market";

const marketsData: Market[] = [
  {
    name: 'Apple',
    symbol: 'AAPL',
    imagePath: 'assets/images/apple-logo.png',
    changePercent: -2.3,
    changeValue: -4.32,
    sellPrice: 120.3,
    buyPrice: 120.5,
    sentiment: 96,
    dataChange: [12, 15, 11, 16, 15, 17, 12]
  },
  {
    name: 'Xiaomi',
    symbol: 'XM',
    imagePath: 'assets/images/apple-logo.png',
    changePercent: 2.5,
    changeValue: 5.123,
    sellPrice: 130.3,
    buyPrice: 130.5,
    sentiment: 97,
    dataChange: [12, 11, 12, 16, 17, 18, 21]
  }
];

@Injectable({
  providedIn: 'root'
})

export class MarketService {

  getMarkets(): Observable<Market[]> {
    return of(marketsData);
  }

  constructor() {
  }
}
