import { Base } from './base';

export interface Skill extends Base {
  name: string;
  description?: string;
  labels?: string[];
}

export interface SkillGroup extends Base  {
  name: string;
  skills: Array<Skill>;
}
