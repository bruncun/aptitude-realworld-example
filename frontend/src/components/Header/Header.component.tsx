export type HeaderProps = {};

export const Header = ({}: HeaderProps): JSX.Element => (
  <nav className="navbar navbar-light">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        conduit
      </a>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a className="nav-link" href="editor.html">
            <i className="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="auth.html">
            Sign up
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="settings.html">
            Settings
          </a>
        </li>
        {/*           <li className="nav-item active">
							<a className="nav-link" href="index.html">Home</a>
          </li> */}
      </ul>
    </div>
  </nav>
);
