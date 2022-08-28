import axios from "axios";

export function getData(params = {}) {
    return axios.get("https://dummyjson.com/products", {
      params: {
        _page: params.page,
        _limit: params.limit,
        _sort: params.sort,
        _order: params.order
      }
    });
  }
  