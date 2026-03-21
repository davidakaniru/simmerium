export const industriesData = [
{
  slug: 'oil-gas-upstream',
  title: 'Oil & Gas Upstream',
  icon: 'ActivityIcon',
  gradient: 'from-blue-900/90 to-simmerium-navy',
  shortDescription:
  'Enhancing recovery, protecting assets, and optimizing flow from reservoir to surface facility.',
  heroDescription:
  'From exploration to production, we deliver integrated chemical solutions that maximize recovery, protect assets, and optimize every stage of the upstream value chain.',
  challenges: [
  'Corrosion in high-temperature, high-pressure wells',
  'Scale deposition reducing flow rates',
  'Bacterial contamination and souring',
  'Emulsion stability issues',
  'H2S management and safety',
  'Environmental compliance in sensitive areas'],

  solutions: [
  {
    title: 'Well Integrity Programs',
    description:
    'Comprehensive chemical programs to protect downhole tubulars and completions from corrosion and scale.'
  },
  {
    title: 'Production Optimization',
    description:
    'Demulsifiers, defoamers, and flow improvers to maximize throughput and oil quality.'
  },
  {
    title: 'Water Management',
    description:
    'Biocides, oxygen scavengers, and scale inhibitors for injection water and produced water systems.'
  },
  {
    title: 'Asset Protection',
    description:
    'Tailored inhibitor programs for pipelines, facilities, and storage infrastructure.'
  }],

  stats: [
  { value: '500+', label: 'Upstream Wells Treated' },
  { value: '35%', label: 'Avg. Production Increase' },
  { value: '60%', label: 'Corrosion Rate Reduction' }],

  relatedIndustries: ['oil-gas-downstream', 'water-treatment']
},
{
  slug: 'oil-gas-downstream',
  title: 'Oil & Gas Downstream',
  icon: 'FuelIcon',
  gradient: 'from-amber-900/90 to-simmerium-navy',
  shortDescription:
  'Improving refining margins, ensuring product quality, and extending equipment life.',
  heroDescription:
  'Advanced chemical programs for refineries and processing plants to maximize margins, ensure product quality, and maintain operational reliability.',
  challenges: [
  'Fouling in heat exchangers and distillation columns',
  'Corrosion in overhead systems and process units',
  'Meeting stringent final product specifications',
  'Emulsion resolution in desalters',
  'Managing opportunity crudes',
  'Energy efficiency and emissions reduction'],

  solutions: [
  {
    title: 'Desalter Optimization',
    description:
    'Advanced demulsifiers and water wash programs to maximize salt and solids removal.'
  },
  {
    title: 'Fouling Control',
    description:
    'Antifoulants for crude preheat trains, visbreakers, and delayed cokers.'
  },
  {
    title: 'Corrosion Management',
    description:
    'Neutralizing amines and filming inhibitors for overhead systems and process units.'
  },
  {
    title: 'Finished Product Additives',
    description:
    'Antioxidants, lubricity improvers, and cold flow improvers to meet specifications.'
  }],

  stats: [
  { value: '50+', label: 'Refineries Supported' },
  { value: '15%', label: 'Energy Savings' },
  { value: '4x', label: 'Run Length Extension' }],

  relatedIndustries: ['oil-gas-upstream', 'petrochemical']
},
{
  slug: 'petrochemical',
  title: 'Petrochemical',
  icon: 'FactoryIcon',
  gradient: 'from-purple-900/90 to-simmerium-navy',
  shortDescription:
  'Specialty additives and process chemicals for efficient petrochemical manufacturing.',
  heroDescription:
  'Specialty process chemicals and additives designed to enhance yield, protect critical equipment, and ensure the continuous operation of petrochemical facilities.',
  challenges: [
  'Polymerization and fouling in compressors and columns',
  'Corrosion in cooling water and process systems',
  'Catalyst poisoning and deactivation',
  'Managing complex wastewater streams',
  'Maintaining product purity',
  'Minimizing unplanned downtime'],

  solutions: [
  {
    title: 'Antifoulants & Inhibitors',
    description:
    'Programs to prevent unwanted polymerization in ethylene and styrene plants.'
  },
  {
    title: 'Cooling Water Treatment',
    description:
    'Comprehensive scale, corrosion, and microbiological control for critical cooling systems.'
  },
  {
    title: 'Process Defoamers',
    description:
    'Specialty antifoams to maximize capacity in scrubbers and stripping columns.'
  },
  {
    title: 'Wastewater Solutions',
    description:
    'Advanced coagulants and flocculants to meet strict discharge regulations.'
  }],

  stats: [
  { value: '100+', label: 'Plants Optimized' },
  { value: '99.9%', label: 'Uptime Achieved' },
  { value: '25%', label: 'Maintenance Reduction' }],

  relatedIndustries: ['oil-gas-downstream', 'water-treatment']
},
{
  slug: 'water-treatment',
  title: 'Water Treatment',
  icon: 'DropletsIcon',
  gradient: 'from-teal-900/90 to-simmerium-navy',
  shortDescription:
  'Sustainable solutions for produced water management and industrial water systems.',
  heroDescription:
  'Comprehensive water management solutions that ensure compliance, protect assets, and enable the sustainable reuse of industrial and produced water.',
  challenges: [
  'Meeting strict environmental discharge limits',
  'Removing residual oil and suspended solids',
  'Controlling scale and corrosion in water systems',
  'Managing microbiological growth and biofouling',
  'Optimizing water reuse and recycling',
  'Handling variable influent water quality'],

  solutions: [
  {
    title: 'Clarification & Filtration',
    description:
    'Advanced coagulants and flocculants for primary and secondary water treatment.'
  },
  {
    title: 'Produced Water Treatment',
    description:
    'Water clarifiers (reverse emulsion breakers) to meet overboard discharge specs.'
  },
  {
    title: 'Cooling & Boiler Water',
    description:
    'Integrated programs to protect critical utility systems from scale and corrosion.'
  },
  {
    title: 'Microbial Control',
    description:
    'Targeted biocide programs to maintain system hygiene and prevent MIC.'
  }],

  stats: [
  { value: '1B+', label: 'Gallons Treated Daily' },
  { value: '95%', label: 'Water Recovery Rate' },
  { value: '100%', label: 'Compliance Record' }],

  relatedIndustries: ['oil-gas-upstream', 'petrochemical']
}];