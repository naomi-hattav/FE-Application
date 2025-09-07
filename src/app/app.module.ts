
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declarations: [
     AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
