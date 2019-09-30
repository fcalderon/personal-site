import { Base }                        from './base';
import { Education }                   from './education';
import { Experience, ExperienceGroup } from './experience';
import { Project }                     from './project';
import { SkillGroup }                  from './skill';

export interface Resume extends Base  {
  title: string;
  subTitle: string;
  phoneNumber: string;
  email: string;
  gitHubLink: string;
  experience: ResumeExperience;
  skills: ResumeSkills;
  education: ResumeEducation;
  projects: ResumeProject;
}

export interface ResumeSection<SectionBodyType> extends Base {
  summary?: string;
  body: SectionBodyType;
}

export type ResumeProject = ResumeSection<Array<Project>>;
export type ResumeExperience = ResumeSection<Array<ExperienceGroup>>;
export type ResumeSkills = ResumeSection<Array<SkillGroup>>;
export type ResumeEducation = ResumeSection<Array<Education>>;


// export interface ResumeExperience extends Base {
//   summary?: string;
//   experience: Array<ExperienceGroup>;
// }
//
// export interface ResumeSkills extends Base {
//   summary?: string;
//   skills: Array<SkillGroup>;
// }
//
// export interface ResumeEducation extends Base {
//   summary?: string;
//   education: Array<Education>;
// }
