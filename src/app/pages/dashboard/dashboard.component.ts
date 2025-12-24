import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

  infoBoxes = [
    { title: 'Users', number: 120, icon: 'fas fa-users', bg: 'bg-info' },
    { title: 'Sales', number: 53, icon: 'fas fa-shopping-cart', bg: 'bg-success' },
    { title: 'Orders', number: 44, icon: 'fas fa-box', bg: 'bg-warning' },
    { title: 'Visitors', number: 65, icon: 'fas fa-chart-line', bg: 'bg-danger' }
  ];

  footerCards = [
    { title: 'Likes', number: 150, icon: 'fas fa-heart', bg: 'bg-info' },
    { title: 'Comments', number: 53, icon: 'fas fa-comments', bg: 'bg-success' },
    { title: 'Shares', number: 44, icon: 'fas fa-share-alt', bg: 'bg-warning' },
    { title: 'New Users', number: 65, icon: 'fas fa-user-plus', bg: 'bg-danger' }
  ];

  users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@test.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@test.com', role: 'User' }
  ];

  ngAfterViewInit() {
    this.renderSalesChart();
    this.renderVisitorsChart();
  }

  private renderSalesChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
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

  private renderVisitorsChart() {
    const ctx = document.getElementById('visitorsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat'],
        datasets: [{
          label: 'Visitors',
          data: [200, 450, 300, 500, 700, 600],
          backgroundColor: 'rgba(0, 166, 90,0.6)'
        }]
      }
    });
  }
}
