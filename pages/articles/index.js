import ArticleList from "../../components/ArticleList";
import SocialLinks from "../../components/SocialLinks";
import Client from "../../contentful/Contentful";

export async function getServerSideProps() {
  const data = await Client.getEntries({
    content_type: "blogPostArticle",
  });
  const data1 = await Client.getEntries({
    content_type: "blogPost",
  });
  const data2 = await Client.getEntries({
    content_type: "blogLinks",
  });

  // if (!data || !data1) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      articleContents: data.items,
      details: data1.items,
      links: data2.items,
    },
  };
}

function Articles({ articleContents, details, links }) {
  console.log(details);
  return (
    <>
      <ArticleList articleContents={articleContents} details={details} />
      <SocialLinks links={links} />
    </>
  );
}

export default Articles;
