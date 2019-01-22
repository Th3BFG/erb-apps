import { BlogPost } from './blogpost';

export const POSTS: BlogPost[] = [
  { Id: 2, Subject: 'The first test post', User: 'Ben',
  DatePosted: new Date(Date.now()), Body: 'this is some test content that should help provide testers space filing content.'},
  { Id: 3, Subject: 'The second test post', User: 'Joe',
  DatePosted: new Date(Date.now()), Body: 'this is even more test content that should help provide testers space filing content.'},
  { Id: 4, Subject: 'The third test post', User: 'Bob',
  DatePosted: new Date(Date.now()), Body: 'this is some more test content that should help provide testers space filing content.'},
];
