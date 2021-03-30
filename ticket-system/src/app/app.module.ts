import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexModule } from '@angular/flex-layout';
// import { FlexModule } from '@angular/flex-layout';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserticketsComponent } from './usertickets/usertickets.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserticketsComponent,
    DashboardComponent,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
