import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyC3JfFHFSTj-OJzm0GV3tEp6Kv5nGC9-oI"
//eslint-disable-next-line
export default {
  search: function(PARAM) {
    return axios.get(BASEURL + PARAM + KEY);
  }
};

