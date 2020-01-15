import {Routes} from '@angular/router'
import {HeaderComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {PortfolioComponent} from './portfolio/portfolio.component'

export const ROUTES:Routes=[
  {path:'',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blogpcast',component:BlogpcastComponent},
  {path:'dataplatform',component: DataplatformComponent}

]
