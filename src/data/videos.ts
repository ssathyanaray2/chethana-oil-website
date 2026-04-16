export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description?: string;
  featured: boolean;
};

export const videos: Video[] = [
  {
    id: "diet-disease-free",
    youtubeId: "nl9G9rhpvIg",
    title: "Diet & Disease-Free Life with Challakere Cold Press Oil",
    category: "Lifestyle",
    description: "An inspirational couple's journey to healthy living — featuring Chetana oils",
    featured: true,
  },
  {
    id: "cold-press-qa",
    youtubeId: "axuqHaO7vYk",
    title: "Answers to all your cold pressed oil queries",
    category: "Q&A",
    featured: false,
  },
  {
    id: "kitchen-caution",
    youtubeId: "G6hAA_Ex7jc",
    title: "Caution to everyone in the kitchen",
    category: "Must Watch",
    featured: false,
  },
  {
    id: "more-varieties",
    youtubeId: "0IV0i3wFb_k",
    title: "More varieties of cold pressed oils — only this mill has lower prices",
    category: "Products",
    featured: false,
  },
  {
    id: "mill-address",
    youtubeId: "4xCiqNhEVbU",
    title: "Oil mill address and answers to your questions",
    category: "Visit Us",
    featured: false,
  },
];
