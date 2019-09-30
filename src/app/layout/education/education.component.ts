import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Education }                                 from '../../model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  @Input() education: Education;
}
