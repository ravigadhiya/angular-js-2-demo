import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
 import { UsersComponent } from './users/users.component';
 import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {AuthenticationGuard} from './guard/authentication.guard';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {path: '', component: HomeComponent,canActivate: [AuthenticationGuard]},
    {path: 'home', component: HomeComponent,canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UsersComponent,canActivate: [AuthenticationGuard]},
  {path: 'posts', component: PostsComponent,canActivate: [AuthenticationGuard]},
    {path: 'logout', component: LogoutComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'post/:id', component: PostDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
