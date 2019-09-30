import { Component, Input, OnInit } from '@angular/core';
import { SkillGroup }               from '../../model/skill';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.scss']
})
export class SkillGroupComponent {
  @Input() skillGroup: SkillGroup;
}
