import Moment from "react-moment";
function TalksList({ talksContents, details }) {
  return (
    <div>
      {details && (
        <div className="talk-hero">
          <div className="talk-intro">
            <h4>{details[0].fields.talks.content[0].content[0].value}</h4>
            <div>
              <p>{details[0].fields.talks.content[1].content[0].value}</p>
            </div>
          </div>
          <div className="pg-img">
            {/* {details[0].fields.image.fields.file.url} */}
            <img
              src="/mic.jpg"
              alt={details[0].fields.image.fields.file.description}
              width="400"
              height="400"
            />
          </div>
        </div>
      )}
      <div>
        {talksContents.map((content) => (
          <div key={content.sys.id} className="talk-list">
            <h3>{content.fields.body.content[0].content[0].value}</h3>
            <div className="list-pbtn">
              <p>{content.fields.body.content[1].content[0].value}</p>
              <div className="view-more">
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={content.fields.links}
                >
                  View Slides &rarr;{" "}
                </a>
              </div>
            </div>
            <small className="date">
              <Moment format="DD/MM/YYYY">
                {content.fields.date.slice(0, 10)}
              </Moment>
            </small>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
export default TalksList;
