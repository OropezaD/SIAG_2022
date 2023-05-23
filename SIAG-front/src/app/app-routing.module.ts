import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      //{path: '', component: DashboardComponent}
    ]
  },
  //{path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
