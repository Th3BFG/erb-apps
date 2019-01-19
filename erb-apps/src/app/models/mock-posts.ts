import { BlogPost } from './blogpost';

export const POSTS: BlogPost[] = [
  { id: 2, post_subject: 'The first test post', user: 'Ben',
  date_posted: new Date(Date.now()), post_body: 'this is some test content that should help provide testers space filing content.'},
  { id: 3, post_subject: 'The second test post', user: 'Joe',
  date_posted: new Date(Date.now()), post_body: 'this is even more test content that should help provide testers space filing content.'},
  { id: 4, post_subject: 'The third test post', user: 'Bob',
  date_posted: new Date(Date.now()), post_body: 'this is some more test content that should help provide testers space filing content.'},
];
