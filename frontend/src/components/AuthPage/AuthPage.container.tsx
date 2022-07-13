import { AuthPage as AuthPageComponent } from "components/AuthPage/AuthPage.component";
import { observer } from "mobx-react-lite";
import { Auth } from "stores/Auth";
import { Navigate } from "react-router-dom";

type AuthPageProps = { auth: Auth };

export const AuthPage = observer(({ auth }: AuthPageProps) =>
  auth.usersCreateResult ? (
    auth.usersCreateResult.case<JSX.Element>({
      pending: () => (
        <AuthPageComponent onFormSubmit={auth.onFormSubmit} isLoading />
      ),
      fulfilled: () => <Navigate to="/settings" />,
      rejected: (error) => (
        <AuthPageComponent
          onFormSubmit={auth.onFormSubmit}
          errors={error.response.data.errors}
        />
      ),
    })
  ) : (
    <AuthPageComponent onFormSubmit={auth.onFormSubmit} />
  )
);
