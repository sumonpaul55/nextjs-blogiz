export interface TBlogs {
  id: string;
  title: string;
  description: string;
  publish_date: string; // You can change to Date if needed: Date | string
  author_name: string;
  blog_image: string;
  total_likes: number;
}
