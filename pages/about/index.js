import SocialLinks from "../../components/SocialLinks";
import Client from "../../contentful/Contentful";

export async function getStaticProps() {
  const data = await Client.getEntries({
    content_type: "blogPost",
  });
  const data1 = await Client.getEntries({
    content_type: "blogLinks",
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      details: data.items,

      links: data1.items,
    },

    revalidate: 20,
  };
}

function About({ details, links }) {
  return (
    <>
      <div className="header_section about">
        <img
          src={details[0].fields.image.fields.file.url}
          alt={details[0].fields.image.fields.file.description}
          // style={{ filter: "grayscale(100%)", opacity: ".9" }}
          width="100%"
        />
      </div>
      <div className="about-div">
        <div
          className="hero_div"
          key={details[0].fields.about.content[0].content[0].value}
        >
          <h2>{details[0].fields.about.content[0].content[0].value}</h2>
          <p> {details[0].fields.about.content[1].content[0].value}</p>
        </div>
        {""}
        <div
          className="hero_div"
          key={details[0].fields.crafts.content[0].content[0].value}
        >
          <h2>{details[0].fields.crafts.content[0].content[0].value}</h2>
          <p> {details[0].fields.crafts.content[1].content[0].value}</p>
        </div>
      </div>
      <SocialLinks links={links} />
    </>
  );
}

export default About;
