import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})

export class GraphicComponent implements OnInit {
  @Input() data: number[] = [];
  @Input() isPositiveChange = false;

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = ['', '', '', '', '', '', ''];
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }]
    },
  };
  public lineChartColors: Color[];

  constructor() {
  }

  ngOnInit() {
    this.lineChartData = [
      {data: this.data, pointRadius: 0},
    ];
    this.lineChartColors = [
      {
        borderColor: this.isPositiveChange === true ? '#75bf79' : '#e78989',
        borderWidth: 3,
        backgroundColor: '#fff'
      },
    ];
  }

}
