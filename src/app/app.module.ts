import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [AppComponent, 
    LoginComponent, 
    RegisterComponent, 
    LayoutComponent, 
    DashboardComponent,
         
   ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule,UsersModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
