import { Routes } from "@angular/router";
import { 
  DashboardComponent, 
  HeroDetailComponent, 
  HeroesComponent 
} from "../components";

const routes: Routes = [
  { // default route
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent
  }
];

export default routes;