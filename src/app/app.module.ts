import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SubjectPageComponent } from './subject-page/subject-page.component';

const appRoutes: Routes = [
  // http://localhost:4200/*
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'user/:index', component: UserPageComponent },
  { path: 'subject', component: SubjectPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    LoginPageComponent,
    SubjectPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
