import {
  CountriesIcon,
  DelegatesIcon,
  ExhibitorsIcon,
  FacebookIcon,
  GrayLinkedInIcon,
  InstagramIcon,
  SpeakersIcon,
  TwitterIcon,
  SquareMetersIcon,
  VisitorIcon,
  YoutubeIcon,
  MediaIcon,
  ExhibitorIcon,
  stayAheadIcon,
  networkWithLeadersIcon,
  exploreSolutionsIcon,
  learnFromLeadersIcon,
  expandSkillsIcon,
} from '@/public/icons/SVGIcons';

import {
  automotiveManufaturersIcon,
  cpdSignificanceIcon1,
  cpdSignificanceIcon2,
  environmentalOrganizationsIcon,
  fleetManagersIcon,
  governmentAgenciesIcon,
  investorsIcon,
  regulatoryProfessionalsIcon,
  researchInstitutionsIcon,
  technologyProvidersIcon,
  utilitiesProvidersIcon,
} from '@/public/icons';

export const navLinks = [
  { title: 'Exhibition', link: '/exhibition' },
  { title: 'Conference', link: '/conference' },
  { title: 'Visit', link: '/visit' },
  { title: 'Sponsors & Partners', link: '/sponsors-partners' },
  { title: 'Media', link: '/media' },
  { title: 'Awards', link: '/awards' },
  { title: 'Register', link: '/register' },
];

export const navMenus = [
  {
    menutitle: 'Exhibition',
    link: '/exhibition',
    dropdownMenu: [
      {
        title: 'Showcase Your Vision',
        section: 'showcase-your-vision',
      },
      {
        title: 'Opportunities at EVIS',
        section: 'main-activities',
      },
      {
        title: 'Our Exhibitors',
        section: 'our-exhibitors',
      },
      {
        title: 'Register now',
        section: 'register-now',
      },
      {
        title: 'Exhibitor Zone',
        section: 'exhibitor-zone',
      },
    ],
  },
  {
    menutitle: 'Conference',
    link: '/conference',
    dropdownMenu: [
      {
        title: 'Elevate Your Knowledge',
        section: 'elevate-knowledge',
      },
      {
        title: 'Our Speakers',
        section: 'speakers',
      },
      {
        title: 'Register Now',
        section: 'register-now',
      },
    ],
  },
  {
    menutitle: 'Visit',
    link: '/visit',
    dropdownMenu: [
      {
        title: 'Why Visit?',
        section: 'why-visit',
      },
      {
        title: 'EVIS 2023 Highlights',
        section: 'highlights',
      },
      {
        title: 'Who you can meet',
        section: 'visitors',
      },
      {
        title: 'Plan Your Visit',
        section: 'plan-visit',
      },
      {
        title: 'Register Now',
        section: 'register-now',
      },
    ],
  },
  { title: 'Sponsors & Partners', link: '/sponsors-partners' },
  {
    menutitle: 'Media',
    link: '/media',
    dropdownMenu: [
      {
        title: 'EVIS Articles',
        section: 'blog',
      },
      {
        title: 'EVIS In News',
        section: 'news',
      },
      {
        title: 'Testimonials',
        section: 'testimonials',
      },
      {
        title: 'Register Now',
        section: 'register-now',
      },
    ],
  },
  { title: 'Awards', link: '/awards' },
  { title: 'Register', link: '/register' },
];

export const statistics = [
  { icon: <DelegatesIcon />, key: 'delegates', title: 'Delegates' },
  { icon: <SpeakersIcon />, key: 'speakers', title: 'Speakers' },
  { icon: <SquareMetersIcon />, key: 'square_meters', title: 'Square meters' },
  { icon: <ExhibitorsIcon />, key: 'exhibitors', title: 'Exhibiting brands' },
  { icon: <CountriesIcon />, key: 'country', title: 'Participating countries' },
];

export const socialLinks = [
  {
    title: 'Facebook Link',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/EVInnovationSummit/',
  },
  {
    title: 'Twitter Link',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/EVISummit',
  },
  {
    title: 'Instagram Link',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/evinnovationsummit',
  },
  {
    title: 'Youtube Link',
    icon: <YoutubeIcon />,
    url: 'https://www.youtube.com/@evis8613',
  },
  {
    title: 'Linkedin Link',
    icon: <GrayLinkedInIcon />,
    url: 'https://www.linkedin.com/company/ev-innovation-summit/?originalSubdomain=ae',
  },
];

export const registerCards = [
  {
    icon: <ExhibitorIcon />,
    title: 'Exhibitor',
    description:
      'Be a part of this groundbreaking event as an Exhibitor, showcasing your innovations and contributing to the discourse on sustainable transportation. Register now to connect with key stakeholders in the electric mobility ecosystem.',
    url: 'https://friv.com',
  },
  {
    icon: <VisitorIcon />,
    title: 'Visitor',
    description:
      'Ready to be a part of the electric mobility revolution? Register now to secure your spot at EVIS and embark on a journey that will shape the future of sustainable transportation.',
    url: 'https://friv.com',
  },
  {
    icon: <DelegatesIcon />,
    title: 'Delegate',
    description:
      'Join us as a delegate at our premier event! Network with industry leaders, gain cutting-edge insights, and contribute to the discourse on sustainable transportation. Register now for an electrifying experience.',
    url: 'https://friv.com',
  },
  {
    icon: <MediaIcon />,
    title: 'Media',
    description:
      "Join us as a Media at the EVIS Conference, capturing the pulse of electric mobility's future. Secure your role in shaping the narrative and amplifying the conversation on sustainable transportation.",
    url: 'https://friv.com',
  },
];

export const whyExhibit = [
  'EV Manufacturers & Distributors',
  'Fleet Owners & Integrated Energy Companies',
  'Banking and Investment Firms',
  'R&D Centers & Environmental Agencies',
  'Government Organizations & Municipalities',
  '...and more.',
  'Public Transport Operators',
];

export const whoExpect = [
  'Vehicle Manufacturers and Distributors',
  'Integrated Energy Companies',
  'Banks, Finance and Investment Firms',
  'R & D Companies',
  'Engineers, Architects, and Designers',
  'Consultants',
  'Environmental Agencies',
  'Government Officials',
  'Law Firms and Academia',
  'Municipalities',
  'CEO/ President/ Chairman',
  'Owner/ Partner/ Proprietor',
  'Public Transport Operators',
  'Technical/ Business Specialists',
  'Technology Service Provider',
];

export const downloadFileInputs = [
  {
    key: 'name',
    title: 'Name',
    placeHolder: 'ex: Mark Dave',
    type: 'text',
    properties: { required: 'Name is Required' },
  },
  {
    key: 'company',
    title: 'Company',
    placeHolder: 'ex: Nirvana Holding',
    type: 'text',
    properties: { required: 'Company is Required' },
  },
  {
    key: 'email',
    title: 'Email',
    placeHolder: 'ex: user@example.com',
    type: 'email',
    properties: {
      required: 'Email is Required',
      pattern: {
        value:
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        message: 'Invalid Email.',
      },
    },
  },
  {
    key: 'country',
    title: 'Country',
    placeHolder: 'ex: UAE',
    type: 'text',
    properties: {
      required: 'Country is required',
    },
  },
  {
    key: 'phone',
    title: 'Phone',
    placeHolder: 'ex: +97150 686 3956',
    type: 'tel',
    properties: {
      required: 'Phone is required',
    },
  },
  {
    key: 'industry',
    title: 'Industry',
    placeHolder: 'ex: EV Mobility',
    type: 'text',
    properties: {
      required: 'Industry is required',
    },
  },
];

export const registerFormInputs = [
  {
    key: 'email',
    title: 'Email',
    type: 'email',
    properties: {
      required: 'Email is Required',
      pattern: {
        value:
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
        message: 'Invalid Email.',
      },
    },
  },
  {
    key: 'name',
    title: 'Name',
    type: 'text',
    properties: { required: 'Name is Required' },
  },
  {
    key: 'job_title',
    title: 'Job Title',
    type: 'text',
    properties: { required: 'Job title is Required' },
  },
  {
    key: 'company_name',
    title: 'Company Name',
    type: 'text',
    properties: { required: 'Company name is Required' },
  },
  {
    key: 'address',
    title: 'Address',
    type: 'text',
    properties: { required: 'Address is Required' },
  },
  {
    key: 'city',
    title: 'City',
    type: 'text',
    properties: { required: 'City is Required' },
  },
  {
    key: 'country',
    title: 'Country',
    type: 'text',
    properties: { required: 'Country is Required' },
  },
  {
    key: 'phone_number',
    title: 'Mobile Phone',
    type: 'tel',
    properties: { required: 'Mobile phone is Required' },
  },
  {
    key: 'business_nature',
    title: 'Business Nature',
    type: 'text',
    properties: { required: 'Business nature is Required' },
  },
  {
    key: 'interested_in',
    title: 'I am interested in',
    type: 'select',
    options: ['Exhibiting', 'Sponsoring'],
    properties: {
      required: 'Interesting is required',
    },
  },
];

export const projectInfoFormInputs = {
  projectInfo: [
    {
      key: 'project_status',
      title: 'Project Status',
      type: 'select',
      options: ['Idea', 'Prototype', 'MVP', 'Startup'],
      properties: {
        required: 'Project status is required',
      },
    },
    {
      key: 'team_number',
      title: 'Number of team members',
      type: 'number',
      properties: {
        required: 'Number of team members is required',
      },
    },
    {
      key: 'university',
      title: 'University',
      type: 'text',
      properties: {
        required: 'University is required',
      },
    },
    {
      key: 'faculty',
      title: 'Faculty',
      type: 'text',
      properties: { required: 'Faculty is required' },
    },
    {
      key: 'project_name',
      title: 'Project Name',
      type: 'text',
      properties: { required: 'Project name is Required' },
    },
    {
      key: 'team_come_with',
      title: 'Please select one of the following',
      type: 'select',
      options: [
        'Our team will bring our prototype/MVP to the event',
        'Our team will present our project as a poster presentation',
      ],
      properties: {
        required: 'You should choose one',
      },
    },
    {
      key: 'project_abstract',
      title: 'Project Abstract',
      type: 'textarea',
      properties: { required: 'Project abstract is Required' },
    },
  ],
  teamLeaderInfo: [
    {
      key: 'team_leader_name',
      title: 'Name',
      type: 'text',
      properties: {
        required: 'Team leader name is required',
      },
    },
    {
      key: 'team_leader_email',
      title: 'Email',
      type: 'email',
      properties: {
        required: 'Team leader email is required',
        pattern: {
          value:
            /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
          message: 'Invalid Email.',
        },
      },
    },
    {
      key: 'team_leader_phone',
      title: 'Phone',
      type: 'tel',
    },
    {
      key: 'team_leader_social_media',
      title: 'Social Media',
      type: 'url',
    },
  ],
};

export const privacyGuidelines = [
  {
    title: 'Privacy & Cookie Policy',
    description:
      'Date of last revision: 23 October 2023.\n At Nirvana MICE, headquartered in Abu Dhabi, we prioritize your privacy. This policy delineates our pledge to protect your information and to comply with data protection regulations.',
  },
  {
    title: 'Details We Might Retain About You',
    description:
      'We may store personal information that either identifies you directly or can be used to do so. Examples of such data encompass: names, birth dates, communication details, IP addresses, and event-centric data such as chat dialogues and multimedia recordings.',
  },
  {
    title: 'How We Acquire Personal Data',
    description:
      'Your data is obtained both directly—when you share it with us—and indirectly through mechanisms like cookies. Such information can originate from our online platforms, virtual event spaces, or from offline exchanges.',
  },
  {
    title: 'About Cookies',
    description:
      'Cookies serve to distinguish users and elevate the functionality of websites. For a comprehensive understanding of our use of cookies, please consult our detailed cookie policy available on our main website.',
  },
  {
    title: 'How Long We Keep Your Data',
    description:
      'We uphold your data for the required duration, factoring in our legal and binding commitments. This data is securely maintained and expunged once it becomes redundant.',
  },
  {
    title: 'Ensuring the Safety of Your Personal Data',
    description:
      'The protection of your information remains at the forefront of our concerns. We employ state-of-the-art safeguards to fend off unauthorized intrusions, modifications, or distribution.',
  },
  {
    title: 'Third-party Websites and Applications',
    description:
      'Please be aware that our policy does not extend to third-party websites or applications, regardless of whether you access them through our services.',
  },
  {
    title: 'Filing a Grievance',
    description:
      "If you're apprehensive about our data treatment practices, we urge you to contact us. Addressing and resolving such concerns is a commitment we stand by.",
  },
  {
    title: 'Policy Updates',
    description:
      'Should there be modifications to this privacy policy, they will be announced across our channels. Regularly reviewing this policy is advisable.',
  },
  {
    title: 'Get in Touch',
    description:
      "For inquiries or feedback, you're welcome to contact us at evis@nirvanatls.com. If you have data protection-specific matters, direct your correspondence to:\n Nirvana MICE Data Protection Officer",
  },
];

export const cpdSignificances = [
  {
    icon: cpdSignificanceIcon1,
    content:
      'Ensures the quality and relevance of professional development activities byassessing them against established standards.',
  },
  {
    icon: cpdSignificanceIcon2,
    content:
      'Provides assurance that accredited programs deliver high-quality learning outcomesand contribute effectively to professional development objectives.',
  },
];

export const whyAttend = [
  { Icon: stayAheadIcon, title: 'Stay Ahead of the Curve' },
  { Icon: networkWithLeadersIcon, title: 'Network with Industry Leaders' },
  { Icon: exploreSolutionsIcon, title: 'Explore Cutting-Edge Solutions' },
  { Icon: learnFromLeadersIcon, title: 'Learn from Thought Leaders' },
  { Icon: expandSkillsIcon, title: 'Expand your skills and Knowledge' },
];

export const whoShouldAttend = [
  {
    icon: automotiveManufaturersIcon,
    title: 'Automotive Manufacturers and Suppliers',
  },
  {
    icon: technologyProvidersIcon,
    title: 'Technology Providers and Innovators',
  },
  {
    icon: governmentAgenciesIcon,
    title: 'Government Agencies and Policymakers',
  },
  {
    icon: researchInstitutionsIcon,
    title: 'Research Institutions and Academia',
  },
  {
    icon: investorsIcon,
    title: 'Investors and Venture Capitalists',
  },
  {
    icon: fleetManagersIcon,
    title: 'Fleet Managers and Transportation Providers',
  },
  {
    icon: utilitiesProvidersIcon,
    title: 'Utilities and Energy Providers',
  },
  {
    icon: environmentalOrganizationsIcon,
    title: 'Environmental Organizations and Advocates',
  },
  {
    icon: regulatoryProfessionalsIcon,
    title: 'Regulatory and Compliance Professionals',
  },
];
