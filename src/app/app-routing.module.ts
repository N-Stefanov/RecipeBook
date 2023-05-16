import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceptionsComponent } from './receptions/receptions.component';
import { ReceptionComponent } from './reception/reception.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'receptions',
    component: ReceptionsComponent,
  },
  { path: 'receptions/:id', component: ReceptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
