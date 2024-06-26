"use client"
import { RWebShare } from "react-web-share";
import Head from 'next/head';
import { revalidatePath } from "next/cache";

async function myAction(id: string) {
  revalidatePath(`/article/${id}`);
  const { getArticleById } = await import('@/graph/apollo');
  // console.log("ID", id);
  const data = await getArticleById(id);

  return data;
}

const ShareNewButton = ({ title, text, url, image_url }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={text} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={text} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image_url} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="315" />

        <meta property="og:image" content={"https://breakingmv.com/_next/static/media/logo.b4bbb8bf.svg"} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="315" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@okmvok" />
        <meta name="twitter:creator" content="@okmvok" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={text} />
        <meta name="twitter:image" content={image_url} />


      </Head>
      <RWebShare
        data={{
          text: text,
          title: title,
          url: url,
        }}
      >
        <button>
          Share 🔗
        </button>
      </RWebShare>
    </>
  );
};
export default ShareNewButton;