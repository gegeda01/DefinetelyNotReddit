import axios from 'axios';

export const REDDIT_BASE_URL = 'https://www.reddit.com';

const GET_POSTS_ENDPOINT = `${REDDIT_BASE_URL}/hot/.json`;

const getPosts = async (after?: string): Promise<any> => {
  return axios.get(GET_POSTS_ENDPOINT, {
    params: {
      after,
    },
  });
};

const getComments = async (url: string): Promise<any> => {
  return axios.get(url + '.json');
};

export { getPosts, getComments };
