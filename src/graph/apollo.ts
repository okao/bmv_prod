import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

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
    menuConnection(orderBy: number_ASC) {
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

const GET_LASTEST_NEWS = gql`
query HomeArticles {
  articleConnection(orderBy: id_DESC, stage: PUBLISHED, last: 3) {
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
        createdAt
        menus {
          ... on Menus {
            id
            name
            number
          }
        }
        title
        subTitle
        publishedAt
        newsContent {
          ... on NewsContents {
            id
            articleBody
            links
            mainImage {
              id
              fileName
              handle
            }
            otherImages {
              handle
              fileName
              id
            }
          }
        }
        typeOfArticle
      }
    }
  }
}
`;

export async function getLatestNews() {
  const { data } = await client.query({
    query: GET_LASTEST_NEWS,
  });
  return data.articleConnection.edges;
}

const GET_ARTICLE_BY_ID = gql`
query Article($id: ID!) {
  article(where: {id: $id}) {
    id
    menus {
      ... on Menus {
        id
        name
      }
    }
    title
    subTitle
    publishedAt
    typeOfArticle
    stage
    publishedBy {
      name
      id
      picture
      isActive
    }
    newsContent {
      ... on NewsContents {
        id
        articleBody
        links
        mainImage {
          handle
          fileName
          locale
        }
        otherImages {
          fileName
          handle
          locale
        }
      }
    }
    articleTags {
      value
      id
    }
  }
}
`;

export async function getArticleById(id : string) {
  const { data } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id },
  });
  return data.article;
}