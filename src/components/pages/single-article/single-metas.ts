export function SingleMetas({ article }: any) {

  const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"
  const baseUrl = "https://breakingmv.com/article"

  return {
    title: article?.title,
    description: article?.subTitle,
    openGraph: {
      title: article?.title,
      description: article?.subTitle,
      url: `${baseUrl}/${article?.id}`,
      images: [
        {
          url: `${imageMainUrl}/${article?.newsContent?.mainImage?.handle}`,
          width: 600,
          height: 315,
          alt: article?.subTitle,
        },
      ],
      type: "article",
      locale: "en_US",
      siteName: "Breaking Mv",
    },
    twitter: {
      site: "@okmvok",
      creator: "@okmvok",
      card: "summary_large_image",
      title: article?.title,
      description:
        article?.subTitle,
      images: [
        {
          url: `${imageMainUrl}/${article?.newsContent?.mainImage?.handle}`,
          width: 600,
          height: 315,
          alt: article?.subTitle,
        },
      ],
    },
  }
}