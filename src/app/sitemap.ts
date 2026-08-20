import { MetadataRoute } from 'next';
import { productsData } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://truecinnamoncare.com';

  const routes = [
    '',
    '/about',
    '/products',
    '/products/wholesale',
    '/products/signature-range',
    '/sourcing',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...productRoutes];
}
