import { Component, OnInit } from '@angular/core';
import { data } from '../../model/data';
import { Resume } from '../../model/resume';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  resume: Resume =  data.resume;
}
