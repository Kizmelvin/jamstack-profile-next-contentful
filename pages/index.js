import HeroDivs from "../components/HeroDivs";
import Client from "../contentful/Contentful";
import SocialLinks from "../components/SocialLinks";
import ArticleList from "../components/ArticleList";
import TalksList from "../components/TalksList";
import { Left, Center } from "../components/Svgs";

export async function getStaticProps() {
  // getting datatypes from contentful
  const data = await Client.getEntries({
    content_type: "blogPost",
  });
  const data1 = await Client.getEntries({
    content_type: "blogLinks",
  });
  const data2 = await Client.getEntries({
    content_type: "blogPostArticle",
  });
  const data3 = await Client.getEntries({
    content_type: "blogPostTalks",
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      details: data.items,
      articleContents: data2.items,
      links: data1.items,
      talksContents: data3.items,
    },

    revalidate: 20, // In seconds
  };
}

function Home({ talksContents, articleContents, links, details }) {
  return (
    <>
      <div className="header_section">
        {/* <img
          src={details[0].fields.image.fields.file.url}
          alt={details[0].fields.image.fields.file.description}
          style={{ filter: "grayscale(100%)" }}
        /> */}
        <img src="/homeimg.jpg" alt="avatar" />
        <div>
          <HeroDivs details={details} />
        </div>
      </div>
      {/* <div style={{ backgroundColor: "red" }}>view talks --</div> */}
      <div className="pengs">
        <div>{Left}</div>
        <div className="center">{Center}</div>
        <div>{Left}</div>
      </div>

      <div className="intro">
        <h4>{details[0].fields.articles.content[0].content[0].value}</h4>
        <div>
          <p>{details[0].fields.articles.content[1].content[0].value}</p>
        </div>
      </div>
      <div className="indexArticleList">
        <ArticleList articleContents={articleContents} />
      </div>
      {""}

      <div className="intro">
        <h4>{details[0].fields.talks.content[0].content[0].value}</h4>
        <div>
          <p>{details[0].fields.talks.content[1].content[0].value}</p>
        </div>
      </div>
      <div className="indexTalkList">
        <TalksList talksContents={talksContents} />
      </div>
      {""}
      <SocialLinks links={links} />
    </>
  );
}

export default Home;
