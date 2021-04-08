const HeroDivs = ({ details }) => {
  return (
    <div className="heroDiv-section">
      <div
        className="hero_div"
        key={details[0].fields.intro.content[0].content[0].value}
      >
        <h2>{details[0].fields.intro.content[0].content[0].value}</h2>
        <p> {details[0].fields.intro.content[1].content[0].value}</p>
      </div>
      <div className="hero_div">
        <h2>{details[0].fields.talks.content[0].content[0].value}</h2>
        <p>{details[0].fields.talks.content[1].content[0].value}</p>
      </div>

      <div className="hero_div">
        <h2>{details[0].fields.articles.content[0].content[0].value}</h2>

        <p>{details[0].fields.articles.content[1].content[0].value}</p>
      </div>
    </div>
  );
};

export default HeroDivs;
