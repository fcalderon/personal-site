import { Component, Input, OnInit } from '@angular/core';
import { Skill }                    from '../../model/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skill: Skill;
}
