import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LoggedComponent } from './logged/logged.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path:'login' , component: LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'logged', component: LoggedComponent,  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
