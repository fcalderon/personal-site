import { Base } from './base';

export interface ExperienceGroup {
  name: string;
  description?: string;
  experience: Array<Experience>;
}

export interface Company extends Base {
  name: string;
  description: string;
}

export interface Position {
  name: string;
  summary: string;
  description?: string;
  keyActivities?: string[];
}

export interface Experience extends Base {
  company: Company;
  startDate: string;
  endDate: string;
  position: Position;
}
