import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: ServicesService, private router:Router ) { }

  ngOnInit() {
  }
  onLogin(form): void{
    this.authService.login(form.value).subscribe(res =>{
      this.router.navigateByUrl('/logged');
    });
    console.log(form.value);
  }
}
