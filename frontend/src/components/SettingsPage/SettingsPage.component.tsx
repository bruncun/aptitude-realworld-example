import { Header } from "components/Header/Header.component";
import { Footer } from "components/Footer/Footer.component";

export type SettingsPageProps = {};

export const SettingsPage = ({}: SettingsPageProps): JSX.Element => (
  <>
    <Header />
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
                {/*             <input type="file" id="file"> */}
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  rows={8}
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
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
                Update Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
