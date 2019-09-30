import { Base } from './base';

export interface Education extends Base {
  institutionName: string;
  summary: string;
  fromDate: string;
  toDate: string;
  details?: string;
}
