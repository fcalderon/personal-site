import { Component, OnInit } from '@angular/core';
import { data }              from '../../model/data';
import { Resume }            from '../../model/resume';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resume: Resume;
  constructor() {
    this.resume = data.resume;
  }

  ngOnInit() {
  }

}
