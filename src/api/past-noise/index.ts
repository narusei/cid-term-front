import http from "@/utils/request";
const baseUrl = "http://localhost:1880";

export default {
  getPastNoiseList(): Promise<any> {
    return http.get(baseUrl + "/past-noise", {});
  }
};
