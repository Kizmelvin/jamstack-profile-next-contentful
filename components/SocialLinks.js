function SocialLinks({ links }) {
  const linkTag = links[0].fields.tag;

  return (
    <div className="footer">
      <ul>
        <li>
          <a href={linkTag.Skype} target="_blank">
            Skype
          </a>
        </li>
        <li>
          {" "}
          <a href={linkTag.Twitter} target="_blank">
            {" "}
            Twitter
          </a>
        </li>
        <li>
          <a href={linkTag.Linkedin} target="_blank">
            {" "}
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
