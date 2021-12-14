import axios from "axios";

export async function fetchData(page) {
  const response = await axios(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
  );
  return response.data;
}
