import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{CustomerService}from '../app/Shared/customer.service';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule}from 'angularfire2/database';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {environment}from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule

  ], 
  schemas: [  
     CUSTOM_ELEMENTS_SCHEMA
    ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
