import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {BlogpcastComponent} from './blogpcast/blogpcast.component'
import {DataplatformComponent} from './dataplatform/dataplatform.component'

export const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blogpcast',component:BlogpcastComponent},
  {path:'dataplatform',component: DataplatformComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
