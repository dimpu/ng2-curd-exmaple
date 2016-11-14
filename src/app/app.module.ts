import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
 
import { InMemUserService }     from './data/user';
import { UserService} from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
// import { UserDetailComponent} from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent }
    ]),
    InMemoryWebApiModule.forRoot(InMemUserService),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
