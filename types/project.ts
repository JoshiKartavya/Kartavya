export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  thumbnail: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  description: string;
  clientName: string;
  date: string;
  price?: string;
  techStack?: string[];
  link?: string;
}

export interface TransformedProject {
  _id: string;
  slug: string;
  preview: string;
  title: string;
  description: string;
  client: string;
  date: string;
  price: string;
  tech: string[];
  link?: string;
}
