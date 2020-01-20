import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogpcastComponent } from './blogpcast/blogpcast.component';
import { DataplatformComponent } from './dataplatform/dataplatform.component';
import { SecurityComponent } from './security/security.component';
import { FooterComponent } from './footer/footer.component';
import { TestemonialsComponent } from './shared/testemonials/testemonials.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortalComponent } from './portal/portal.component';
import { CoursesComponent } from './portal/courses/courses.component';
import { LoginComponent } from './security/login/login.component';
import { FirebaseauthComponent } from './security/firebaseauth/firebaseauth.component';
//import { AngularFireModule } from "@angular/fire";
//import { AngularFireAuth } from "@angular/fire/auth";

export const firebaseConfig = {
  apiKey: "----",
  authDomain: "-----n",
  databaseURL: "-----",
  projectId: "------",
  storageBucket: "----",
  messagingSenderId: "-----"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    BlogpcastComponent,
    DataplatformComponent,
    SecurityComponent,
    FooterComponent,
    TestemonialsComponent,
    ServicesComponent,
    ContactsComponent,
    PortalComponent,
    CoursesComponent,
    LoginComponent,
    FirebaseauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  //  AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
