import { Base } from './base';

export interface Project extends Base {
  name: string;
  description?: string;
  labels?: string[];
  repoLink?: string;
}
