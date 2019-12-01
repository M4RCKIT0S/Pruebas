import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl = 'http://localhost3000';
  private token: string;
  constructor(private http: HttpClient) { }
    login(data) {
      return this.http.post('http://localhost:3000/login', data)
    }
    register(data){
      return this.http.post(this.apiUrl, data)
    }
}
