import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserticketsComponent } from './usertickets/usertickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"usertickets",component:UserticketsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"createticket",component:CreateTicketComponent},
  {path:"**",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
