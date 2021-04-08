import Moment from "react-moment";

function ArticleList({ details, articleContents }) {
  return (
    <div>
      {details && (
        <div className="art-hero">
          <div className="pg-img">
            {/* {details[0].fields.image.fields.file.url} */}
            <img
              src="https://images.unsplash.com/photo-1521079299535-94854b0a7b27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHx3cml0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt={details[0].fields.image.fields.file.description}
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
          <div className="art-intro">
            <h4>{details[0].fields.articles.content[0].content[0].value}</h4>
            <div>
              <p>{details[0].fields.articles.content[1].content[0].value}</p>
            </div>
          </div>
        </div>
      )}
      <div>
        {articleContents.map((content) => (
          <div key={content.sys.id} className="art-list">
            <h3>{content.fields.body.content[0].content[0].value}</h3>
            <div className="list-pbtn">
              <p>{content.fields.body.content[1].content[0].value}</p>
              <div className="read-more">
                <a
                  target="-blank"
                  referrerPolicy="no-referrer"
                  href={content.fields.links}
                >
                  3 mins read &rarr;{" "}
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
export default ArticleList;
