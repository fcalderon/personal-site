import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillGroupComponent } from './skill-group/skill-group.component';
import { ExperienceGroupComponent } from './experience-group/experience-group.component';

@NgModule({
  declarations: [
    NavbarComponent, ProjectComponent, SkillComponent, ExperienceComponent, EducationComponent, SkillGroupComponent,
    ExperienceGroupComponent
  ],
  exports: [NavbarComponent, ProjectComponent, SkillComponent, ExperienceComponent, EducationComponent, SkillGroupComponent, ExperienceGroupComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule {
}
