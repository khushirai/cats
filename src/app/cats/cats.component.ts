import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  values:any;
  count:number=12;
  p:number=1;
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getCats();
  }

  getCats()
  {
    return this.http.get('https://cataas.com/api/cats').pipe(delay(1000)).subscribe((response:any)=>{
      this.values=response;
    });
  }
}

