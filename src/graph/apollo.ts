import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { revalidatePath } from "next/cache";
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clume5vsq0h7s07wgpf4wdcai/master',
  cache: new InMemoryCache(),
  headers: {
    // 'x-api-key': '4b0b0f3b-2b0a-4f2b-8b5b-1b7b7b0b7b7b',
    "gcms-stage": "PUBLISHED",
    "gcms-locales": "en",
    "apiKey": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTIzNTcwNTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsdW1lNXZzcTBoN3MwN3dncGY0d2RjYWkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI3NTFkOWYxYy0wODg0LTQ5MzYtODFjYi0xMDBhNDFlMWUzODkiLCJqdGkiOiJjbHVuOTZlencwa2F2MDdwaWU5M2Q1NzQwIn0.HUcCizTMtw0qRkrc7qU17hL6mTCuTZp1goZeD506xgUNrPXEAbYzpYUcD7bYROiEIQHz-Wb-7gTIfNDFmSGWKGDymgMivBSgjCXfVMjNoJn5LRGuzhF37p6vfdizkaeQaDkcpnQ7bPphO0Kh6Q4fakPb4niFA-Aaf0ZtVcdaZn9EaPFPOey-ZHCPsxHXv3CBJ2OsrPEGRvjdulRKCU7M64BTLwm4kU2MnCyitBICJK-CtcDP-moYDA7IGVmQ3qCJQOcchGQ7jbTP_0MV_-C1D2pAqs7IWmGCqBMje8AX_rVP4QxrjQ96vspWUCqggjEFRDagH6oUfemFc3vjI6rmRNMVRTXsZj8iLErwJRFLX1oulScg--6vw_OWYfPHzpSq1lbTkndMv5lh7ZoSZGie8BhZ7FsRaqsjE6bE6ZRVAetJBuNd0XW3hD4zzt5PVHZhlqQfeQzVn865nC_3h7J3tc7Z_7ZDgOy6ATsD1nvmrrDZW625xba35LrxdygAIUJqKcGqDziJ0RZRfobY8gVk0XpytxpaZ8SBxBrEbeYz3CXah8Pg5Tt4xnNaEsH0EtdVlgR1O3xJ19nHGTvqWEc6E8pr9fStQyYkSPTsi8uIXLTaL5E7WvIW5wcYAhcdnBLS32Utd-7ZwizliSfRRy0EwTFva-bB1Wkd9F9yaFpZNlE",
  },
  // connectToDevTools: true,
});

// GraphQL query
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      description
      image
      availability
      slug
    }
  }
`;

// Function to fetch data
export async function getProducts() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data.products;
}

const GET_MENU = gql`
  query SiteMenus {
    menuConnection(orderBy: number_DESC, stage: PUBLISHED) {
      edges {
        node {
          id
          name
          number
        }
      }
    }
  }
`;

export async function getMenu() {
  const { data } = await client.query({
    query: GET_MENU,
  });
  return data.menuConnection.edges;
}

// const GET_LASTEST_NEWS = gql`
// query HomeArticles {
//   articleConnection(orderBy: id_DESC, stage: PUBLISHED, last: 3) {
//     pageInfo {
//       pageSize
//       startCursor
//       endCursor
//       hasNextPage
//       hasPreviousPage
//     }
//     edges {
//       cursor
//       node {
//         id
//         createdAt
//         menus {
//           ... on Menus {
//             id
//             name
//             number
//           }
//         }
//         title
//         subTitle
//         publishedAt
//         newsContent {
//           ... on NewsContents {
//             id
//             articleBody
//             links
//             mainImage {
//               id
//               fileName
//               handle
//             }
//             otherImages {
//               handle
//               fileName
//               id
//             }
//           }
//         }
//         typeOfArticle
//       }
//     }
//   }
// }
// `;

const GET_MAIN_ARTICLES = gql`
  query MainArticles {
    articleConnection(
      stage: PUBLISHED, orderBy: createdAt_DESC, first: 3
      where: {
        AND: {
          OR: [
            { typeOfArticle: breaking },
            { typeOfArticle: main }
          ]
        }
        articleMenus_every: {number_gte: 1}
      }
    ) {
      edges {
        cursor
        node {
          id
          title
          latinTitle
          subTitle
          latinSubTitle
          typeOfArticle
          articleAuthor {
            image {
              mimeType
              url(transformation: {image: {resize: {width: 300}}})
            }
            name
          }
          mainImage {
            id
            handle
            fileName
            url(
              transformation: {document: {output: {format: jpg}}, image: {resize: {width: 500}}}
            )
          }
          articleMenus {
            id
            name
            number
          }
          publishedBy {
            name
            picture
          }
          publishedAt
          createdAt
        }
      }
    }
  }
`;

export async function getMainArticles() {
  //revalidate: 1,
  // revalidatePath('/home');

  //sleep for 0.5 seconds
  // await new Promise(resolve => setTimeout(resolve, 500));

  const { data } = await client.query({
    query: GET_MAIN_ARTICLES,
  });
  return data.articleConnection.edges;
}



const HOME_ARTICLES = gql`
query HomeArticles {
  articleConnection(
    orderBy: createdAt_DESC
    first: 6
    stage: PUBLISHED
    where: {
      articleMenus_every: {number_gte: 1},
      AND: {
        articleMenus_some: {
          NOT: {name: "ދުނިޔެ"},
          AND: {
            NOT: {name: "ރިޕޯޓް"}
          }
        }
      }
    }
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleAuthor {
          image {
            mimeType
            url(transformation: {image: {resize: {width: 300, height: 300}}, document: {output: {format: jpg}}})
          }
          name
        }
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
      }
    }
  }
}
`;

export async function getHomeArticles() {
  // revalidatePath(`/`);
  const { data } = await client.query({
    query: HOME_ARTICLES,
  });
  return data.articleConnection;
}




const GET_ARTICLE_BY_ID = gql`
query Article($id: ID!) {
  article(where: {id: $id}) {
    id
    title
    latinTitle
    subTitle
    latinSubTitle
    articleAuthor {
      image {
        mimeType
        url(
          transformation: {image: {resize: {width: 300}}, document: {output: {format: jpg}}}
        )
      }
      name
    }
    mainImage {
      id
      mimeType
      url(
        transformation: {image: {resize: {width: 600, height: 315}}, document: {output: {format: jpg}}}
      )
    }
    typeOfArticle
    stage
    articleMenus {
      id
      name
      number
    }
    publishedAt
    publishedBy {
      name
      picture
    }
    articleTags {
      value
      id
    }
    articleContent {
      ... on ArticleBody {
        id
        content
      }
      ... on ArticleRichText {
        id
        content {
          html
          markdown
          raw
          text
        }
      }
      ... on ArticleImage {
        id
        image {
          handle
          fileName
          id
          mimeType
          url(transformation: { image: {resize: {width: 600, height: 315}}, document: {output: {format: jpg}}})
          # url
        }
      }
      ... on ArticleQuotes {
        id
        quote
      }
      ... on ArticleTwitterLink {
        id
        twitterLink
      }
      ... on ExternalLinks {
        id
        title
        image {
          fileName
          handle
          url(
            transformation: {image: {resize: {width: 300, height: 300}}, document: {output: {format: jpg}}}
          )
        }
        link
      }
    }
  }
}
`;

export async function getArticleById(id: string) {
  revalidatePath(`/article/${id}`);
  const { data } = await client.query({
    fetchPolicy: 'no-cache',
    query: GET_ARTICLE_BY_ID,
    variables: { id },
  });
  return data.article;
}


const ARTICLES_WITH_TYPE_COUNT = gql`
query ArticleWithTypeCount($name: String!, $first: Int!) {
  articleConnection(
    orderBy: createdAt_DESC
    first: $first
    stage: PUBLISHED
    where: {
      articleMenus_some: {
        name: $name
      }
    }
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
      }
    }
  }
}
`;


export async function getArticleWithTypeCount(
  menuType: string = "ރިޕޯޓް",
  menuCount: number = 3
) {
  const { data } = await client.query({
    query: ARTICLES_WITH_TYPE_COUNT,
    variables: {
      name: menuType,
      first: menuCount
    },
  });

  return data?.articleConnection;
}

const GET_ARTICLE_BY_TAG = gql`
query ArticleByTag($tag: String!, $first: Int!) {
  articleConnection(
    orderBy: createdAt_DESC
    first: $first
    stage: PUBLISHED
    where: {articleTags: {_search: $tag}}
  ) {
    pageInfo {
      pageSize
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        title
        subTitle
        latinTitle
        latinSubTitle
        articleMenus {
          id
          name
          number
        }
        mainImage {
          fileName
          handle
          mimeType
          url(
            transformation: {document: {output: {format: jpg}}, image: {resize: {width: 300, height: 300}}}
          )
        }
        publishedAt
        createdAt
        articleAuthor {
          image {
            url(transformation: {image: {resize: {width: 300}}})
          }
          name
        }
      }
    }
  }
}
`;

export async function getArticleByTag(tag: string, first: number = 8) {

  const { data } = await client.query({
    query: GET_ARTICLE_BY_TAG,
    variables: { tag: tag, first: first },
  });
  return data.articleConnection;
}

//get Advertisements by type
const GET_ADVERTISEMENTS = gql`
query Advertisements {
  advertisement {
    id, name, adsType ,
    link,
    adsAsset {
      id
      fileName
      handle
      mimeType
      url
    }
  }
}
`;

export async function getAdvertisements() {
  const { data } = await client.query({
    query: GET_ADVERTISEMENTS
  });

  return data.advertisement;
}
