import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieService } from './services/movie.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { GenresComponent } from './components/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LandingComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SideBarComponent,
    DashboardComponent,
    MovieComponent,
    MoviesComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
