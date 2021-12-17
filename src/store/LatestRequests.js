/** @format */
import { makeAutoObservable } from "mobx";

class LatestRequests {
  requests = [];

  constructor() {
    makeAutoObservable(this);
  }

  addRequest(request) {
    let key = "request " + localStorage.length;
    localStorage.setItem(key, request);
    this.requests.push({ key: key, request: localStorage.getItem(key) });
    if (localStorage.length === 6) {
      localStorage.clear();
      this.requests = this.requests.filter((req) => req.key !== "request 0");
      for (let i = 0; i < 5; i++) {
        this.requests[i].key = "request " + i;
      }
      for (let i = 0; i < 5; i++) {
        localStorage.setItem(this.requests[i].key, this.requests[i].request);
      }
    }
  }

  clear = () => {
    localStorage.clear();
  };
}

export default new LatestRequests();
