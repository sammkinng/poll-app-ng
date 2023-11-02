import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPwComponent } from './pages/forgot-pw/forgot-pw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddInfoComponent } from './pages/add-info/add-info.component';
import { PollComponent } from './pages/poll/poll.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/category/category.component';
import { addInfoGuard, uidGuard } from './guards/add-info.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Landing page',
    canActivate:[uidGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate:[uidGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
    canActivate:[uidGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPwComponent,
    title: 'Forgot Password',
    canActivate:[uidGuard]
  },
  {
    path: 'add-info',
    component: AddInfoComponent,
    title: 'Add Personal Details',
    canActivate:[addInfoGuard]
  },
  {
    path: 'poll/:id',
    component: PollComponent,
    title: 'Poll',
    canActivate:[uidGuard]
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    title: 'Blog',
    canActivate:[uidGuard]
  },
  {
    path:'profile/:id',
    component:ProfileComponent,
    title:'User Profile',
    canActivate:[uidGuard]
  },
  {
    path:'category/:id',
    component:CategoryComponent,
    title:'Category',
    canActivate:[uidGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: "404 Not Found",
    canActivate:[uidGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
