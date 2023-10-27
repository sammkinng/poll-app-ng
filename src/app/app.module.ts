import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPwComponent } from './pages/forgot-pw/forgot-pw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddInfoComponent } from './pages/add-info/add-info.component';
import { PollComponent } from './pages/poll/poll.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FrameComponent } from './components/frame/frame.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';

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
    FrameComponent,
    FilterComponent,
    CardComponent,
    LoaderComponent
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
