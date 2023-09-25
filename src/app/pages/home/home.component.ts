import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';


interface IDataFakeItem {
  id: number;
  photo: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:IDataFakeItem[] = dataFake
  dataFiltered: IDataFakeItem[];

  constructor() {
    this.dataFiltered = this.data.filter((item) => item.id !== 0);
  }

  ngOnInit(): void {
  }

}
