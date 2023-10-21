import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddInfoComponent } from './components/add-info/add-info.component';
import { PollComponent } from './components/poll/poll.component';
import { BlogComponent } from './components/blog/blog.component';
import { FrameComponent } from './components/frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    NotFoundComponent,
    AddInfoComponent,
    PollComponent,
    BlogComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
