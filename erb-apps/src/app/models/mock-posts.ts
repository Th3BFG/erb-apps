import { BlogPost } from './blogpost';

export const POSTS: BlogPost[] = [
  { id: 2, title: 'The first test post', author: 'Ben',
    postDate: new Date(Date.now()), postBody: 'this is some test content that should help provide testers space filing content.'},
  { id: 3, title: 'The second test post', author: 'Joe',
    postDate: new Date(Date.now()), postBody: 'this is even more test content that should help provide testers space filing content.'},
  { id: 4, title: 'The third test post', author: 'Bob',
    postDate: new Date(Date.now()), postBody: 'this is some more test content that should help provide testers space filing content.'},
];
