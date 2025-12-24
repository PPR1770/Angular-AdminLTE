import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';

import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ChartsComponent } from './pages/charts/charts.component';

const routes = [
  { path: 'auth/login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
     {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module')
            .then(m => m.UsersModule)
      },
      { path: 'charts', component: ChartsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
