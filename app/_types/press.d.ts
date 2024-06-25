declare module 'PressCenter' {
  interface ArticleMaininfo {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    photo: string;
    schedule: string;
    status: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
    date_time: string;
  }

  interface ArticleDetails {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    photo: string;
    schedule: string;
    status: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
  }

  interface NewsMainInfo {
    id: string;
    title: string;
    body: string;
    photo: string;
    link: string;
    created_at: string;
    updated_at: string;
  }

  interface TestimonialMainInfo {
    id: string;
    video_id: string;
    name: string;
    subtitle: string;
    photo: string;
    body: string;
    company: string;
    youtube_link: string;
    press_center: boolean;
    created_at: string;
    updated_at: string;
  }

  interface TestimonialDetails {
    id: string;
    video_id: string;
    name: string;
    subtitle: string;
    photo: string;
    body: string;
    youtube_link: string;
    press_center: boolean;
    created_at: string;
    updated_at: string;
  }
}
