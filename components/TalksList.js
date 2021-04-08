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
              src="https://images.unsplash.com/photo-1538449327350-43b4fcfd35ac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1pY3JvcGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt={details[0].fields.image.fields.file.description}
              style={{ filter: "grayscale(100%)" }}
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
