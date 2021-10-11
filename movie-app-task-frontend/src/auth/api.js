import axios from "axios";

export default class ApiClient {
  static createInstance(route, token = "") {
    return axios.create({
      baseURL: `https://localhost:5001/api/${route}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token !== "" ? `Bearer ${token}` : "",
      },
    });
  }
}