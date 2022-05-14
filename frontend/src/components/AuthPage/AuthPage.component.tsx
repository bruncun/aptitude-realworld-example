import { Header } from "components/Header/Header.component";
import { Footer } from "components/Footer/Footer.component";

export type AuthPageProps = {
  isSignIn?: true;
};

export const AuthPage = ({ isSignIn }: AuthPageProps): JSX.Element => (
  <>
    <Header />
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-xs-12">
            <h1 className="text-xs-center">Sign {isSignIn ? "In" : "Up"}</h1>
            <p className="text-xs-center">
              <a href="#">{isSignIn ? "Need" : "Have"} an account?</a>
            </p>

            {/*<ul className="error-messages">
          <li>That email is already taken</li>
        </ul> */}

            <form>
              {!isSignIn && (
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                  />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign {isSignIn ? "in" : "up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
