import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';


export interface PeriodicElement {
  Track: string;
  Nombre: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Track: "MEAN Stack", Nombre: 2},
  {Track: "Android", Nombre: 2},
  {Track: "Ionic", Nombre: 1},
  {Track: "Angular", Nombre: 0},
  {Track: "NodeJS", Nombre: 0},
  {Track: "Xamarian", Nombre: 0},

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private fakesessionItem: FakesessionitemService){}
  nbrSess: number;
  listsess: any;
  displayedColumns: string[] = ['Track','Nombre'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.listsess=this.fakesessionItem.get();
    this.nbrSess=this.listsess.length;
  }

}
