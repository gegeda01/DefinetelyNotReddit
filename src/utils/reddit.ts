import axios from 'axios';

const GET_POSTS_ENDPOINT = 'https://www.reddit.com/best/.json';

const getPosts = async (after?: string): Promise<any> => {
  return axios.get(GET_POSTS_ENDPOINT, {
    params: {
      after,
    },
  });
};

export { getPosts };
