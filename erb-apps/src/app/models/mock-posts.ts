import { BlogPost } from './blogpost';

export const POSTS: BlogPost[] = [
  { id: 2, subject: 'The first test post', poster: 'Ben',
  dateposted: new Date(Date.now()), body: 'this is some test content that should help provide testers space filing content.'},
  { id: 3, subject: 'The second test post', poster: 'Joe',
  dateposted: new Date(Date.now()), body: 'this is even more test content that should help provide testers space filing content.'},
  { id: 4, subject: 'The third test post', poster: 'Bob',
  dateposted: new Date(Date.now()), body: 'this is some more test content that should help provide testers space filing content.'},
];
