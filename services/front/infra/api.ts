import getUserInfos from "../modules/user/getUserInfo";
import sessionInterceptor from "./session.interceptor";

export default async function api(url: string, options?: RequestInit) {
  const userToken = getUserInfos().token;

  let headers: RequestInit["headers"] = {};

  if (options) {
    if (options.headers) {
      headers = options.headers;
    }
  }

  Object.assign(headers, { authorization: `Bearer ${userToken}` });

  const response = await fetch(url, {
    ...options,
    headers,
  });

  sessionInterceptor(response);

  return response;
}
