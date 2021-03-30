import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // var headers_object = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //    'Authorization': "Bearer "+t)
  // });

  //     const httpOptions = {
  //       headers: headers_object
  //     };
  constructor(private http: HttpClient) { }
  login(data):Observable<any> {
    return this.http.post("http://localhost:5000/login",data)
  }
  getUsers():Observable<any> {
    return this.http.get("http://localhost:5000/getUsers")
  }
  createTicket(data):Observable<any> {
    return this.http.post("http://localhost:5000/createTicket",data)
  }
}
