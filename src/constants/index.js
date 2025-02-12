import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  kubernetes,
  aws,  
  terraform,
  jenkins,
  argocd,
  helm,
  kodekloud,
  kodekloud2,
  kubekost,
  wideanchor,
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging of System",
    icon: prototyping,
  },
  {
    title: "Containerization",
    icon: prototyping,
  },
  {
    title: "Cloud Computing",
    icon: prototyping,
  },
  {
    title: "Aws",
    icon: aws,
  },
  
  
  
];

const technologies = [
  
  {
    name: 'jenkins',
    icon: jenkins,
  },
  
 
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'kubernetes',
    icon: kubernetes,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'terraform',
    icon: terraform,
  },
  {
    name: 'argocd',
    icon: argocd,
  },
  {
   name: 'helm', 
   icon: helm,
  },
];

const experiences = [
  {
    title: 'DevOps Engineer',
    company_name: 'Micromerger',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - Present',
  },
  {
    title: 'Devops Engineer',
    company_name: 'WideAnchor Group',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2021 - May 2024',
  },
 
  {
    title: 'BS Computer Science',
    company_name: 'Bahria University, Islamabad',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2019 - July 2023',
  },
];

const projects = [
  {
    id: "project-1",
    name: " KodeKloud AWS Code Pipeline (CI/CD) ",
    description: "View my verified achievement from Amazon Web Services (AWS).",
    image: kodekloud,
    repo: "#",
    demo: "https://certificates.kodekloud.com/243632f1-9ea3-4f55-9d3d-8ea385ff204e/adf846a7-70ba-42c6-8b05-1d1b2c414bd5/36ea877b-dffc-4c79-a3b1-dab8bf22c064.pdf",
  },
  {
    id: "project-2",
    name: "KodeKloud AWS Elastic Container Service (ECS) ",
    description:
      "AWS Elastic Container Service (ECS) ",
    image: kodekloud2,
    repo: "#",
    demo: "https://certificates.kodekloud.com/243632f1-9ea3-4f55-9d3d-8ea385ff204e/07e9e4b2-0b65-490c-87d7-22d243e0709b/e9e09a59-bbee-4ad8-abd7-6b1c37c761aa.pdf",
  },
  {
    id: "project-3",
    name: "KubeKost",
    description: "Kubecost Technical Certification",
    image: kubekost,
    repo: "#",
    demo: "https://media.licdn.com/dms/document/media/v2/D4D2DAQFc5ZF-zfsWHg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1728936497474?e=1740009600&v=beta&t=xDbzf1PkNGxKbmIoVzPr8_lwb3UYU0kv3sqQlEzTGYI",
  },
  {
    id: "project-4",
    name: "WideAnchor Group",
    description: "WildAnchor Group Certificate",
    image: wideanchor,
    repo: "#",
    demo: "https://www.linkedin.com/in/muhammad-muneeb-4a46b5194/details/certifications/1730303023960/single-media-viewer/?profileId=ACoAAC2qZ3wBOY9j5_cn2hwvY8fpmlRbrf69Ew0"
  },
 
];

export { services, technologies, experiences, projects };
