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
  public mappaVisible: boolean;
  data:Object;

  constructor(public http: HttpClient) {
    this.showLogin = true;
    this.mappaVisible = false;
  }

   accedi(uname: HTMLInputElement, psw:HTMLInputElement):boolean{

    this.inviodati(uname.value, psw.value);
    return false;
   }

   inviodati(uname:string, psw:string): void {

   const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
   const params = new HttpParams().set('username', uname).set('password', psw);
   const options = {headers,params,withCredentials: false};

   this.http.post('https://3000-f6bf1bbb-b688-40da-a629-ebd564aee32d.ws-eu0.gitpod.io/login',null, options  ).subscribe(data => {
    this.data = data;
    if(data == true){
      alert('Login effettuato correttamente');
      this.showLogin = false;
      this.mappaVisible = true;
    }else{
      alert('Qualcosa è andato storto. Riprova.');
    }
   });
  }

  ngOnInit() {
  }

}
