import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { FormsModule } from '@angular/forms';
import { LoggedComponent } from './logged/logged.component';
import { AuthGuard } from './auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoggedComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
      }
    })
  ],
  providers: [ ServicesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
