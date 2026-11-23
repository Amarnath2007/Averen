import { MetadataRoute } from 'next';
import { getAllArticles } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.averentechnologies.in';

  // Dynamic published articles from data source
  const articles = getAllArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => {
    // Parse valid date or fallback to current date
    const dateObj = new Date(article.publishedDate);
    const validDate = isNaN(dateObj.getTime()) ? new Date() : dateObj;

    return {
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: validDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...articleEntries,
  ];
}
