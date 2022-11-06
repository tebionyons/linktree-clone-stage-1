import { React } from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links-container">
      <a
        className="btn-twitter"
        id="btn-twitter"
        href="https://twitter.com/tebionyons"
      >
        Twitter Link
      </a>
      <a id="btn-zuri" href="https://training.zuri.team/">
        Zuri Team
      </a>
      <a id="books" href="http://books.zuri.team ">
        Zuri Books
      </a>
      <a id="book__python" href="https://books.zuri.team">
        Python Books
      </a>
      <a id="pitch" href="https://background.zuri.team">
        Background Check for Coders
      </a>
      <a id="book__design" href="https://books.zuri.team/design-rules ">
        Design Books
      </a>
      <Link id="contact" to="/contact">
        Contact Me
      </Link>
      <div className="icon-links">
        <a href="https://slack.com/remiontembeitebi">
          <img className="slack" alt="slack-img" src="../images/slak.png" />{" "}
        </a>
        <a href="https://github.com/tebionyons" className="fa fa-github">
          {" "}
        </a>
      </div>
      <hr className="horizontal_line"/>
    </div>
  );
}
