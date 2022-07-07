import axios from "axios";
export const Get = (url, setData, setSearchData) => {
  return axios
    .get(url)
    .then((res) => {
      setData(res.data);
      setSearchData(res.data);
    })
    .catch((err) => console.log(err));
};
