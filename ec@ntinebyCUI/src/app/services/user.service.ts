import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class UserService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

url = "http://127.0.0.1:3000/user";
  constructor (private http: HttpClient) {}

  getUsers(){
    return this.http.get(this.url+'s');
  }
  getUser(id){
    return this.http.get(this.url+'/'+id);
  }


  addUser(user : any){
  
    let body = {
      name: user.name,
      firstname:user.firstname,
      email: user.email,
      password:"ecantine",
      role:user.role,
      fund:user.fund
    }
    
  return this.http.post(this.url, body, this.httpOptions );

  }
  updateUser(user : any, id:any){
  
    let body = {
      name: user.name,
      firstname:user.firstname,
      email: user.email,
      password:user.password,
      role:user.role,
      fund:user.fund
    }
    
  return this.http.put(this.url+'/'+id, body, this.httpOptions );

  }

  deleteUser(id:any){
    return this.http.delete(this.url+'/'+id);
  }
}
