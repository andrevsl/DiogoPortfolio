import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {BlogpcastComponent} from './blogpcast/blogpcast.component'
import {DataplatformComponent} from './dataplatform/dataplatform.component'
import {ServicesComponent} from './services/services.component'
import {ContactsComponent} from './contacts/contacts.component'
import { PortalComponent } from './portal/portal.component';


export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blogpcast',component:BlogpcastComponent},
  {path:'services',component:ServicesComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'portal',component:PortalComponent},
  {path:'dataplatform',component: DataplatformComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
