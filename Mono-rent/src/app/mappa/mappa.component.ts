import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Monopattino } from '../monopattino.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {
  data: Object;
  @Input() monopattini: Monopattino[];
  o :Observable<Object>;
  latitudine: number = 45.518070; //latidudine x MIlano
  longitudine: number = 9.162860; //longitudine x Milano


  constructor(public http: HttpClient) {
    this.visualizzaMonopattini();
   }
  visualizzaMonopattini(): void {
     this.o = this.http.get<Monopattino[]>('https://3000-c2392745-a72f-40df-81f3-3d469f751159.ws-eu0.gitpod.io/visualizzaMonopattini');
     this.o.subscribe(this.getData);
  }
  getData = (monopattino : Monopattino[]) =>
   {
     this.monopattini = monopattino;
     console.log(this.monopattini);
   }

   
  ngOnInit() {
  }

}
