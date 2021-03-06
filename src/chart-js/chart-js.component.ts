import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartJSInterface } from '../chart-js-interfaces';

@Component({
  selector: 'chartjs',
  template: '<div [ngStyle]="getStyle()"><canvas></canvas></div>',
  styles: [
    `
      div {
        display: inline-block;
        width: 100%;
      }
    `
  ]
})
export class ChartJsComponent implements AfterViewInit {
  @Input() public height: number = null;
  @Input() public data: ChartJSInterface;
  private chart: Chart;

  constructor(private el: ElementRef) {}

  public ngAfterViewInit() {
    this.chart = new Chart(
      this.el.nativeElement.querySelector('canvas').getContext('2d'),
      this.data
    );
  }
  public getStyle() {
    if (this.height === null) {
      return {};
    }
    return {
      height: `${this.height}px`
    };
  }
}
