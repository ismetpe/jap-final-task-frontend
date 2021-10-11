import Api from "./api";

let apiClient = Api.createInstance("auth");

export const loginUser = (username, password) => {
  const params = JSON.stringify({
    username: username,
    password: password,
  });
  console.log("here i am");
  return apiClient.post(`/login`, params);
};

export const registerUser = (username, password,repeatpassword) => {
  const params = JSON.stringify({
    username: username,
    password: password,
    repeatpassword: repeatpassword,
  });
 
  return apiClient.post(`/register`, params);
};