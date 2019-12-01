import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: ServicesService, private router:Router) { }

  ngOnInit() {
  }
  onRegister(form): void{
    this.authService.register(form.value).subscribe(res =>{
      this.router.navigateByUrl('/logged');
    });
  }
}
