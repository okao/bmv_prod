const { getMainArticles, getHomeArticles } = await import('@/graph/apollo');

export default async function sitemap() {

  const data = await getMainArticles();
  const homeData = await getHomeArticles();

  const mainArticles = data?.map((article: any) => {
    return {
      url: `https://breakingmv.com/article/${article.node.id}`,
      lastModified: article.node.updatedAt,
    }
  });

  const homeArticles = homeData?.edges?.map((article: any) => {
    return {
      url: `https://breakingmv.com/article/${article.node.id}`,
      lastModified: article.node.updatedAt,
    }
  });

  // return {
  //   sitemap: [

  //   ],
  // }

  return [
    {
      url: 'https://breakingmv.com/',
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 1,
    },
    ...mainArticles,
    ...homeArticles,
    {
      url: 'https://breakingmv.com/section?name=ރާއްޖެ',
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://breakingmv.com/section?name=ދުނިޔެ',
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://breakingmv.com/section?name=ކުޅިވަރު',
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://breakingmv.com/section?name=މީހުން',
      lastModified: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://breakingmv.com/section?name=ރިޕޯޓް',
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://breakingmv.com/section?name=އަންހެނުން',
      lastModified: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://breakingmv.com/section?name=ވާހަކަ',
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://breakingmv.com/section?name=ސުފްރާ%20މަތިން',
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.5,
    },
  ];
}