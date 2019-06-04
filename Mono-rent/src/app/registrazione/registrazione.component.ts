import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  public showLogin: boolean;
  public showRegistrazione: boolean;
  data:Object;

  constructor(public http: HttpClient) {
    this.showRegistrazione = true;
    this.showLogin = false;
  }

  registrati(name: HTMLInputElement,surname: HTMLInputElement,dataN: HTMLInputElement,email: HTMLInputElement,username: HTMLInputElement, psw:HTMLInputElement):boolean{
    this.inviodati(name.value,surname.value,dataN.value,email.value,username.value, psw.value);
    return false;
  }
   inviodati(name:string,surname:string,dataN:string,email:string,username:string, psw:string): void {

   const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
   const params = new HttpParams()
                  .set('name', name)
                  .set('surname', surname)
                  .set('dataN',dataN)
                  .set('email',email)
                  .set('username',username)
                  .set('password',psw);
   const options = {headers,params,withCredentials: false};

   this.http.post('https://3000-c828032b-866f-4fc3-acf7-95f97f5abe5c.ws-eu0.gitpod.io/registrazione',null, options  ).subscribe(data => {
    this.data = data;
    if(data != undefined){
      alert('Registrazione avvenuta correttamente. Puoi effettuare il login.');
      this.showLogin = true;
      this.showRegistrazione = false;
    }else{
      alert('Qualcosa è andato storto. Riprova.');
    }
   });
  }
  ngOnInit() {
  }

}
