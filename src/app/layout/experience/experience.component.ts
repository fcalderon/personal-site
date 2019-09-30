import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Experience }                                        from '../../model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  @Input() experience: Experience;
}
