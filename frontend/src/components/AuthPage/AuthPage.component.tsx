import { Header } from "components/Header/Header.component";
import { Footer } from "components/Footer/Footer.component";
import {
  ConduitFeaturesUsersCreateUserData,
  ConduitFeaturesUsersLoginUserData,
} from "../../../types/api";
import { ChangeEvent, FormEvent, useState } from "react";

export type AuthPageState =
  | ConduitFeaturesUsersLoginUserData
  | ConduitFeaturesUsersCreateUserData;
export type AuthPageProps = {
  isSignIn?: true;
  onFormSubmit: (state: AuthPageState) => void;
};

export const AuthPage = ({
  isSignIn,
  onFormSubmit,
}: AuthPageProps): JSX.Element => {
  const [state, setState] = useState<AuthPageState>({
    ...(!isSignIn && { username: "" }),
    email: "",
    password: "",
  });
  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => setState({ ...state, [name]: value });
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onFormSubmit(state);
  };

  return (
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

              <form onSubmit={handleFormSubmit}>
                {!isSignIn && (
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      name="username"
                      type="text"
                      placeholder="Your Name"
                      onChange={handleInputChange}
                    />
                  </fieldset>
                )}
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleInputChange}
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
};
