import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
})
export class ChartsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.renderLineChart();
    this.renderBarChart();
    this.renderAreaChart();
    this.renderPieChart();
    this.renderDonutChart();
  }

  private renderLineChart() {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(60,141,188,0.2)',
          borderColor: 'rgba(60,141,188,1)',
          borderWidth: 2,
          fill: true
        }]
      }
    });
  }

  private renderBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
        datasets: [{
          label: 'Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#f56954','#00a65a','#f39c12','#00c0ef','#3c8dbc','#d2d6de'
          ]
        }]
      }
    });
  }

  private renderAreaChart() {
    const ctx = document.getElementById('areaChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2017','2018','2019','2020','2021','2022'],
        datasets: [{
          label: 'Visitors',
          data: [50, 60, 70, 90, 120, 150],
          backgroundColor: 'rgba(60,141,188,0.4)',
          borderColor: 'rgba(60,141,188,1)',
          borderWidth: 1,
          fill: true
        }]
      }
    });
  }

  private renderPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Chrome','IE','Firefox','Safari','Opera','Navigator'],
        datasets: [{
          data: [700,500,400,600,300,100],
          backgroundColor: [
            '#f56954','#00a65a','#f39c12','#00c0ef','#3c8dbc','#d2d6de'
          ]
        }]
      }
    });
  }

  private renderDonutChart() {
    const ctx = document.getElementById('donutChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Chrome','IE','Firefox','Safari','Opera'],
        datasets: [{
          data: [700,500,400,600,300],
          backgroundColor: [
            '#f56954','#00a65a','#f39c12','#00c0ef','#3c8dbc'
          ]
        }]
      }
    });
  }
}
