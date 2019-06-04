import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showLogin: boolean;
  public showMappa: boolean;
  public showLogout: boolean;
  data:Object;

  constructor(public http: HttpClient) {
    this.showLogin = true;
    this.showMappa = false;
    this.showLogout = false;
  }

   accedi(uname: HTMLInputElement, psw:HTMLInputElement):boolean{

    this.inviodati(uname.value, psw.value);
    return false;
   }

   inviodati(uname:string, psw:string): void {

   const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
   const params = new HttpParams().set('username', uname).set('password', psw);
   const options = {headers,params,withCredentials: false};

   this.http.post('https://3000-c828032b-866f-4fc3-acf7-95f97f5abe5c.ws-eu0.gitpod.io/login',null, options  ).subscribe(data => {
    this.data = data;
    if(data == true){
      alert('Login effettuato correttamente');
      this.showLogin = false;
      this.showMappa = true;
      this.showLogout = true;
    }else{
      alert('Qualcosa è andato storto. Riprova.');
    }
   });
  }

  ngOnInit() {
  }

}
