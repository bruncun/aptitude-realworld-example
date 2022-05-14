import { Header } from "components/Header/Header.component";
import { Footer } from "components/Footer/Footer.component";

export type HomePageProps = {};

export const HomePage = ({}: HomePageProps): JSX.Element => (
  <>
    <Header />
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <div className="post-preview">
              <div className="post-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="profile.html" className="author">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a href="post.html" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>
                  In my demo, the holy grail layout is nested inside a document,
                  so there's no body or main tags like shown above. Regardless,
                  we're interested in the className names and the appearance of
                  sections in the markup as opposed to the actual elements
                  themselves. In particular, take note of the modifier
                  classNamees used on the two sidebars, and the trivial order in
                  which they appear in the markup. Let's break this down to
                  paint a clear picture of what's happening...
                </p>
                <span>Read more...</span>
              </a>
            </div>

            <div className="post-preview">
              <div className="post-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="profile.html" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="post.html" className="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>
                  In my demo, the holy grail layout is nested inside a document,
                  so there's no body or main tags like shown above. Regardless,
                  we're interested in the className names and the appearance of
                  sections in the markup as opposed to the actual elements
                  themselves. In particular, take note of the modifier
                  classNamees used on the two sidebars, and the trivial order in
                  which they appear in the markup. Let's break this down to
                  paint a clear picture of what's happening...
                </p>
                <span>Read more...</span>
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="#" className="label label-pill label-default">
                  programming
                </a>
                <a href="#" className="label label-pill label-default">
                  javascript
                </a>
                <a href="#" className="label label-pill label-default">
                  angularjs
                </a>
                <a href="#" className="label label-pill label-default">
                  react
                </a>
                <a href="#" className="label label-pill label-default">
                  mean
                </a>
                <a href="#" className="label label-pill label-default">
                  node
                </a>
                <a href="#" className="label label-pill label-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
