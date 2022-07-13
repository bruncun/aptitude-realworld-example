/* tslint:disable */
/* eslint-disable */
/**
 * RealWorld API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ConduitFeaturesProfilesProfileEnvelope } from '../models';
/**
 * ProfilesApi - axios parameter creator
 * @export
 */
export const ProfilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesUsernameFollowDelete: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling profilesUsernameFollowDelete.');
            }
            const localVarPath = `/profiles/{username}/follow`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesUsernameFollowPost: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling profilesUsernameFollowPost.');
            }
            const localVarPath = `/profiles/{username}/follow`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesUsernameGet: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username','Required parameter username was null or undefined when calling profilesUsernameGet.');
            }
            const localVarPath = `/profiles/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfilesApi - functional programming interface
 * @export
 */
export const ProfilesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameFollowDelete(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>>> {
            const localVarAxiosArgs = await ProfilesApiAxiosParamCreator(configuration).profilesUsernameFollowDelete(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameFollowPost(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>>> {
            const localVarAxiosArgs = await ProfilesApiAxiosParamCreator(configuration).profilesUsernameFollowPost(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameGet(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>>> {
            const localVarAxiosArgs = await ProfilesApiAxiosParamCreator(configuration).profilesUsernameGet(username, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProfilesApi - factory interface
 * @export
 */
export const ProfilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameFollowDelete(username: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
            return ProfilesApiFp(configuration).profilesUsernameFollowDelete(username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameFollowPost(username: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
            return ProfilesApiFp(configuration).profilesUsernameFollowPost(username, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} username 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profilesUsernameGet(username: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
            return ProfilesApiFp(configuration).profilesUsernameGet(username, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfilesApi - object-oriented interface
 * @export
 * @class ProfilesApi
 * @extends {BaseAPI}
 */
export class ProfilesApi extends BaseAPI {
    /**
     * 
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public async profilesUsernameFollowDelete(username: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
        return ProfilesApiFp(this.configuration).profilesUsernameFollowDelete(username, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public async profilesUsernameFollowPost(username: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
        return ProfilesApiFp(this.configuration).profilesUsernameFollowPost(username, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} username 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public async profilesUsernameGet(username: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ConduitFeaturesProfilesProfileEnvelope>> {
        return ProfilesApiFp(this.configuration).profilesUsernameGet(username, options).then((request) => request(this.axios, this.basePath));
    }
}
