import axios from "axios";

export const getBeer = () =>
  axios
    .get("https://random-data-api.com/api/beer/random_beer")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
