import { Education }           from './education';
import { Company, Experience } from './experience';
import { Project }             from './project';
import { Resume }              from './resume';
import { Skill }               from './skill';


const AllCompanies: { [ key: string ]: Company } = {
  carbonite: { key: 'carbonite', name: 'Carbonite', description: '' },
  scholarJet: { key: 'scholarjet', name: 'ScholarJet', description: '' },
  emc: { key: 'emc', name: 'Dell-EMC', description: '' }
};

const AllExperience: { [key: string ]: Experience } = {
  carbonite1 : {
    key: 'carbonite1',
    company: AllCompanies.carbonite,
    startDate: '01/2016',
    endDate: '06/2016',
    position: {
      keyActivities: [
        'Re-brand, maintain and improve an acquired Android application with over 10m download at the time',
        'Build and presented prototypes to organization leaders to promote potential new features'
      ],
      summary: '',
      name: 'Software Engineer Co-Op'
    }
  },
  carbonite2: {
    key: 'carbonite2',
    company: AllCompanies.carbonite,
    startDate: '07/2016',
    endDate: '05/2017',
    position: {
      keyActivities: [
        'Add features and run experiments on mobile application in order to improve user experience which resulted in better app rating',
        'Build features to cross-sell/promote other Carbonite products',
        'Build and presented prototypes to organization leaders to promote potential new features',
      ],
      name: 'Software Engineer (part-time)',
      summary: ''
    },
  },
  carbonite3: {
    key: 'carbonite3',
    company: AllCompanies.carbonite,
    startDate: '06/2017',
    endDate: '12/2017',
    position: {
      keyActivities: [
        'Maintained and planned to gracefully sunset legacy product used by over 10k users',
        'Build proof of concepts using technologies not yet adopted by the company that gave my team knowledge to serve as consultants ' +
        'for a new project that had the visibility of the entire organization',
      ],
      name: 'Software Engineer Co-Op',
      summary: ''
    },
  },
  scholarJet: {
    key: 'scholarJet',
    company: AllCompanies.scholarjet,
    startDate: '06/2017',
    endDate: '12/2017',
    position: {
      keyActivities: [
        'Built full stack application/platform from the ground up using modern frameworks, tools, and programming languages',
        'Design, implement, and manage, our development workflow as well as constantly evaluate and improve it',
        'Plan and execute implementation of new features and improvements to our platform'
      ],
      name: 'Software Engineer Co-Op',
      summary: 'CTO & Co-Founder'
    },
  }
};
const AllProjects: { [ key: string ]: Project } = {
  international: {
    key: 'international-app',
    name: 'International Auto Service Application',
  },
  scholarJet: {
    key: 'scholarjet-platform',
    name: 'ScholarJet Platform'
  },
};

const AllEducation: { [ key: string ]: Education } = {
  northeastern: {
    key: 'northeastern',
    institutionName: 'Northeastern University',
    summary: 'B.S in Computer Science',
    fromDate: '2014',
    toDate: '2018'
  },
  bunkerHill: {
    key: 'bunkerHill',
    institutionName: 'Bunker Hill Community College',
    summary: 'A.S in Computer Science',
    fromDate: '2011',
    toDate: '2014'
  }
};
const AllSkills: { [ key: string ]: Skill } = {
  java: { key: 'java', name: 'Java EE/Spring' },
  kotlin: { key: 'kotlin', name: 'Kotlin' },
  mysql: { key: 'mysql', name: 'MySQL/SQL' },
  docker: { key: 'docker', name: 'Docker' },
  angular: { key: 'angular', name: 'Angular' },
  typescript: { key: 'typescript', name: 'TypeScript' },
  react: { key: 'react', name: 'React JS' },
  node: { key: 'node', name: 'NodeJS' },
  htmlCss: { key: 'htmlCss', name: 'HTML+CSS' },
  rxjs: { key: 'rxjs', name: 'RXJS' },
  aws: { key: 'aws', name: 'AWS' },
  azure: { key: 'azure', name: 'Azure' },
  jenkins: { key: 'jenkins', name: 'Jenkins' },
  git: { key: 'git', name: 'Git/GitHub' },
  jira: { key: 'jira', name: 'Jira' },
  firebase: { key: 'firebase', name: 'Firebase' },
};

const resume: Resume = {
  key: 'resume',
  title: 'Francisco Calderon',
  subTitle: '',
  phoneNumber: '617-959-5937',
  email: 'me@franciscojcalderon.com',
  gitHubLink: '',
  experience: {
    key: '',
    body: [
      {
        name: 'Carbonite',
        experience: [
          AllExperience.carbonite1,
          AllExperience.carbonite2,
          AllExperience.carbonite3,
        ]
      },
      {
        name: 'ScholarJet',
        experience: [
          AllExperience.scholarjet
        ]
      }
    ]
  },
  skills: {
    key: '',
    body: [
      {
        key: '',
        name: 'Back-end',
        skills: [
          AllSkills.java,
          AllSkills.kotlin,
          AllSkills.mysql,
          AllSkills.docker
        ]
      },
      {
        key: '',
        name: 'Front-end',
        skills: [
          AllSkills.angular,
          AllSkills.typescript,
          AllSkills.react,
          AllSkills.node,
          AllSkills.htmlCss,
          AllSkills.rxjs
        ]
      },
      {
        key: 'Tools and Services',
        name: 'Tools and Services',
        skills: [
          AllSkills.aws,
          AllSkills.azure,
          AllSkills.jenkins,
          AllSkills.git,
          AllSkills.jira,
          AllSkills.firebase
        ]
      }
    ]
  },
  education: {
    key: '',
    body: [
      AllEducation.northeastern,
      AllEducation.bunkerHill
    ]
  },
  projects: {
    key: '',
    body: [
      AllProjects.scholarJet,
      AllProjects.international
    ]
  }
};

export const data = {
  resume
};
