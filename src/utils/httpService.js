import axios from 'axios';

const basePart = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/';
const size = 20;
export async function fetchData(page, userId) {
  let link;
  // check if we want to fetch friendList
  if (userId) {
    link = `${basePart}${userId}/friends/${page}/${size}`;
  } else {
    link = `${basePart}${page}/${size}`;
  }
  const response = await axios(link);
  return response.data;
}
export async function fetchUser(userId) {
  const response = await axios(`${basePart}${userId}`);
  return response.data;
}
