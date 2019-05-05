import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedinGuard } from './services/loggedin.guard';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  // APP-LAYOUT PATHS
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'movie/:id', component: MovieComponent }
    ],
    canActivate: [LoggedinGuard]
  },

  // SITE-LAYOUT PATHS
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: LandingComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
