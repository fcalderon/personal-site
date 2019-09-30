import { Component, Input, OnInit } from '@angular/core';
import { ExperienceGroup } from '../../model/experience';

@Component({
  selector: 'app-experience-group',
  templateUrl: './experience-group.component.html',
  styleUrls: ['./experience-group.component.scss']
})
export class ExperienceGroupComponent {
  @Input() experienceGroup: ExperienceGroup;
}
