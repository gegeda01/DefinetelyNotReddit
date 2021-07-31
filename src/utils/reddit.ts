import axios from 'axios';
import qs from 'query-string';
import { CommentEntry, RedditApiPostsResponse } from '../types';
import {
  Comment,
  FullPost,
  Navigation,
  Page,
  Post,
  RedditApiComment,
  RedditApiCommentsResponse,
  RedditApiPost,
} from './../types/index';
import { cleanText } from './text';

export const REDDIT_BASE_URL = 'https://www.reddit.com';

export const GET_POSTS_ENDPOINT = `${REDDIT_BASE_URL}`;

export const JSON_PATH = '.json';

export interface CommonRedditApiParams {
  after?: string;
  before?: string;
}

export interface SubredditApiParams extends CommonRedditApiParams {
  subreddit?: string;
}

export interface CommentsApiParams extends CommonRedditApiParams {
  subreddit: string;
  id: string;
}

export const createUrl = (url: string, params: SubredditApiParams): string => {
  return qs.stringifyUrl({
    url: url,
    query: {
      after: params.after,
      before: params.before,
    },
  });
};

export const createPostsUrl = (params: SubredditApiParams): string => {
  let url = GET_POSTS_ENDPOINT;
  if (params.subreddit) {
    url += `/r/${params.subreddit}`;
  }
  return createUrl(url, params);
};

export const createCommentsUrl = (params: CommentsApiParams): string => {
  const url = `${REDDIT_BASE_URL}/r/${params.subreddit}/comments/${params.id}`;
  return createUrl(url, params);
};

export const createLoadMoreUrl = (params: CommentsApiParams): string => {
  const url = `${REDDIT_BASE_URL}/r/${params.subreddit}/comments/${params.id}`;
  return createUrl(url, params);
};

export const transformUrl = (displayUrl: string): string => {
  const parsed = qs.parseUrl(displayUrl);
  const query = parsed.query;
  const url = parsed.url + `/${JSON_PATH}`;
  return qs.stringifyUrl({ url, query });
};

export const getPosts = async (
  postsUrl: string
): Promise<RedditApiPostsResponse> => {
  const response = await axios.get<RedditApiPostsResponse>(
    transformUrl(postsUrl)
  );
  return response.data;
};

export const getComments = async (
  commentsUrl: string
): Promise<RedditApiCommentsResponse> => {
  const response = await axios.get<RedditApiCommentsResponse>(
    transformUrl(commentsUrl)
  );
  return response.data;
};

interface MapPostResponseToPageParams {
  subreddit?: string;
  response: RedditApiPostsResponse;
}

export const mapPostResponseToPage = (
  params: MapPostResponseToPageParams
): Page => {
  const beforeId = params.response.data.children[0]?.data.id;
  const before = beforeId ? 't3_' + beforeId : null;

  const navigation: Navigation = {
    home: REDDIT_BASE_URL,
    next:
      params.response.data.after &&
      createPostsUrl({
        subreddit: params.subreddit,
        after: params.response.data.after || undefined,
      }),
    previous: null,
    // before &&
    // createPostsUrl({
    //   subreddit: params.subreddit,
    //   before,
    // }),
  };

  const posts: Post[] = params.response.data.children.map(mapPostToPagePost);

  return {
    header: navigation,
    posts,
    footer: navigation,
  };
};

const mapPostToPagePost = (post: RedditApiPost): Post => {
  const data = post.data;
  return {
    title: data.title,
    author: data.author,
    subreddit: createPostsUrl({
      subreddit: data.subreddit,
    }),
    url: createCommentsUrl({
      subreddit: data.subreddit,
      id: data.id,
    }),
  };
};

interface MapCommentsResponseToPageParams {
  subreddit?: string;
  response: RedditApiCommentsResponse;
}

export const mapCommentsResponseToPage = (
  params: MapCommentsResponseToPageParams
): Page => {
  const navigation: Navigation = {
    home: REDDIT_BASE_URL,
    next:
      params.response[1].data.after &&
      createPostsUrl({
        subreddit: params.subreddit,
        after: params.response[1].data.after || undefined,
      }),
    previous:
      params.response[1].data.before &&
      createPostsUrl({
        subreddit: params.subreddit,
        after: params.response[1].data.before || undefined,
      }),
  };

  const responsePost = params.response[0].data.children[0];

  const post: FullPost = {
    ...mapPostToPagePost(responsePost),
    body: responsePost.data.selftext
      ? cleanText(responsePost.data.selftext)
      : null,
  };

  const comments: CommentEntry[] = mapCommentsToPageComment(
    params.response[1].data.children
  );

  return {
    header: navigation,
    post,
    comments,
    footer: navigation,
  };
};

const mapCommentsToPageComment = (
  comments: RedditApiComment[]
): CommentEntry[] => {
  return comments.filter((c) => c.kind !== 'more').map(mapCommentToPageComment);
};

const mapCommentToPageComment = (comment: RedditApiComment): CommentEntry => {
  if (comment.kind === 'more') {
    return {
      more: '(・_・ヾ',
    };
  }

  const data = comment.data;

  const pageComment: Comment = {
    author: data.author,
    comment: cleanText(data.body),
  };

  if (data.replies) {
    pageComment.replies = mapCommentsToPageComment(data.replies.data.children);
  }

  return pageComment;
};
