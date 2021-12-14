import axios from "axios";

export async function fetchData(page, userId = null) {
  let link;
  if (userId) {
    link = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/20`;
  } else {
    link = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`;
  }
  const response = await axios(link);
  return response.data;
}
