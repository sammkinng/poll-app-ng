import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPwComponent } from './pages/forgot-pw/forgot-pw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddInfoComponent } from './pages/add-info/add-info.component';
import { PollComponent } from './pages/poll/poll.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FrameComponent } from './components/frame/frame.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoryComponent } from './pages/category/category.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth,provideAuth } from '@angular/fire/auth';
import { getFirestore ,provideFirestore} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TermsComponent } from './pages/terms/terms.component';
import { ContentComponent } from './components/content/content.component';
import { OptionComponent } from './components/option/option.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { HomeComponent } from './components/home/home.component';

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
    LoaderComponent,
    ProfileComponent,
    CategoryComponent,
    TermsComponent,
    ContentComponent,
    OptionComponent,
    BlogSectionComponent,
    BlogHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
