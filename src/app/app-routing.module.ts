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

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Landing page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'forgot-password',
    component: ForgotPwComponent,
    title: 'Forgot Password'
  },
  {
    path: 'add-info',
    component: AddInfoComponent,
    title: 'Add Personal Details'
  },
  {
    path: 'poll/:id',
    component: PollComponent,
    title: 'Poll'
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    title: 'Blog'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: "404 Not Found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
