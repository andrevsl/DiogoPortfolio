import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {BlogpcastComponent} from './blogpcast/blogpcast.component'
import {DataplatformComponent} from './dataplatform/dataplatform.component'
import {ServicesComponent} from './services/services.component'
import {ContactsComponent} from './contacts/contacts.component'
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './security/login/login.component';
import {LocationStrategy,HashLocationStrategy } from '@angular/common'
import { SecurityGuard } from './security/security.guard';

export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blogpcast',component:BlogpcastComponent},
  {path:'services',component:ServicesComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'portal',component:PortalComponent,
        canActivate:[SecurityGuard]},
  {path:'dataplatform',component: DataplatformComponent,
        canActivate:[SecurityGuard]},
  {path:'login',component: LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled',
                                          useHash: true,preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
