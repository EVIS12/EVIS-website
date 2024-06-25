declare module 'Exhibitors' {
  interface ExhibitorMainInfo {
    id: string;
    name: string;
    logo: string;
    description: string;
    standNumber: string;
  }

  interface ExhibitorDetails {
    id: string;
    name: string;
    logo: string;
    description: string;
    standNumber: string;
    website: string;
    exhibitor_url: string;
    address: string;
    country: string;
    is_partner: boolean;
    is_sponser: boolean;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    version: string[];
  }
}
