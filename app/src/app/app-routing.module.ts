import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { LoggedComponent } from './logged/logged.component';


const routes: Routes = [
  { path:'login' , component: LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'logged', canActivate:[AuthGuard], component: LoggedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
