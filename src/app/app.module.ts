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
    TestemonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
