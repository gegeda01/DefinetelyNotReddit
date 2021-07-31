export interface RedditApiResponseData<TChildren> {
  after: string | null;
  before: string | null;
  children: TChildren[];
}
export interface RedditApiPostsResponse {
  kind: string;
  data: RedditApiResponseData<RedditApiPost>;
}

export interface RedditApiCommentsResponseData {
  kind: string;
  data: RedditApiResponseData<RedditApiComment>;
}

export type RedditApiCommentsResponse = [
  RedditApiPostsResponse,
  RedditApiCommentsResponseData
];

export interface RedditApiPost {
  data: {
    id: string;
    subreddit: string;
    author: string;
    title: string;
    body?: string;
    permalink: string;
    url: string;
    selftext: string;
  };
}

export interface RedditApiComment {
  kind: 't1' | 'more';
  data: {
    author: string;
    body: string;
    replies: RedditApiCommentsResponseData;
  };
}

export interface Navigation {
  home: string;
  next: string | null;
  previous: string | null;
}

export interface Page {
  header: Navigation;
  post?: FullPost;
  posts?: Post[];
  comments?: CommentEntry[];
  footer: Navigation;
}

export interface Post {
  title: string;
  author: string;
  subreddit: string;
  url: string;
}

export interface FullPost extends Post {
  body: string | null;
}

export type CommentEntry = Comment | LoadMore;

export interface Comment {
  author: string;
  comment: string;
  replies?: CommentEntry[];
}

export interface LoadMore {
  more: string;
}
