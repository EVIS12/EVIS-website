declare module 'Files' {
  interface DownloadableFile {
    id: string;
    file: string;
    type: string;
  }

  interface DownloadFormData {
    name: string;
    company: string;
    email: string;
    country: string;
    phone: string;
    industry: string;
    interested_in: string;
    contract_file: string[];
  }
}
