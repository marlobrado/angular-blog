import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ''
  contentTitle: string = ''
  contentDescription: string = '1'
  private id:string | null = '0'

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')

      )
      this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id: string | null){
    const result = dataFake.filter((item) => item.id.toString() == id)

    this.photoCover = result[0].photo
    this.contentTitle = result[0].title
    this.contentDescription = result[0].description

  }

}
