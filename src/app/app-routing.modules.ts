import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'main',
    pathMatch : 'full'
  },
  // {
  //   path: 'main',
  //  component : AppComponent,
  // },
  {
    path : 'main',
    component : MainComponent,
    children : [
      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      },
      {
        path: 'dashboard',
        component : DashboardComponent,
      },
      {
        path : '**',
        redirectTo : ''
      }
    ]
  },
  {
    path : '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
