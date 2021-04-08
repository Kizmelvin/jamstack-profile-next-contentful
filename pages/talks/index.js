import Client from "../../contentful/Contentful";
import TalksList from "../../components/TalksList";
import SocialLinks from "../../components/SocialLinks";

export async function getStaticProps() {
  const data = await Client.getEntries({
    content_type: "blogPostTalks",
  });
  const data1 = await Client.getEntries({
    content_type: "blogPost",
  });
  const data2 = await Client.getEntries({
    content_type: "blogLinks",
  });

  if (!data || !data1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      talksContents: data.items,
      details: data1.items,
      links: data2.items,
    },
    revalidate: 20,
  };
}

function Talks({ talksContents, details, links }) {
  return (
    <>
      <TalksList talksContents={talksContents} details={details} />
      <SocialLinks links={links} />
    </>
  );
}

export default Talks;
