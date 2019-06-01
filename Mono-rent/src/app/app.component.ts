import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-rent';
  public showLogin : boolean;
  public showAsk : boolean;
  public showRegistrazione : boolean;

  public constructor(public http:HttpClient){
    this.showAsk = true;
  }

  public goToLog() : void{
    //mostro il componente per il login
    this.showLogin = !this.showLogin;
    this.showAsk = false;
  }

  public goToReg() : void{
    //mostro il componente per la registrazione
    this.showRegistrazione = !this.showRegistrazione;
    this.showAsk = false;
  }
}
