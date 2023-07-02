import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage, UserDashboard } from './pages';

const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'user', component: UserDashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
