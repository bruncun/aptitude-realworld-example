import { makeAutoObservable } from "mobx";
import {
  ConduitFeaturesUsersCreateUserData,
  ConduitFeaturesUsersUser,
  ConduitFeaturesUsersUserEnvelope,
} from "types/models";
import { UsersApi } from "types/apis/users-api";
import { Configuration } from "types/configuration";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { AxiosResponse } from "axios";

const configuration = new Configuration({ basePath: "http://localhost:5000" });
const usersApi = new UsersApi(configuration);

export class Auth {
  user?: ConduitFeaturesUsersUser;
  usersCreateResult?: IPromiseBasedObservable<
    AxiosResponse<ConduitFeaturesUsersUserEnvelope, any>
  >;

  constructor() {
    makeAutoObservable(this);
  }

  usersCreate = (data: ConduitFeaturesUsersCreateUserData) =>
    fromPromise(
      usersApi.usersPost({
        data: { user: data },
        method: "POST",
      })
    );

  onFormSubmit = async (data: ConduitFeaturesUsersCreateUserData) => {
    this.usersCreateResult = this.usersCreate(data);

    try {
      const response = await this.usersCreateResult;
      this.user = response.data.user;
    } catch (error) {
      console.log(error);
    }
  };
}
