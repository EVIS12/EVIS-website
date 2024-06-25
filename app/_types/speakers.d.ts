declare module 'Speakers' {
  interface SpeakersVersion {
    id: string;
    name: string;
    year: string;
  }

  interface SpeakerMainInfo {
    id: string;
    name: string;
    job_title: string;
    description: string;
    photo: string;
    conference_page: boolean;
    home_page: boolean;
    company: string;
  }

  interface SpeakerDetails {
    id: string;
    photo: string;
    name: string;
    job_title: string;
    company: string;
    description: string;
    country: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    created_at: string;
    home_page: boolean;
    conference_page: boolean;
    year: string;
  }
}
