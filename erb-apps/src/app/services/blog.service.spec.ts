import { async } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { POSTS } from '../models/mock-posts';
import { BlogPost } from '../models/blogpost';


describe('BlogService', () => {
    let service: BlogService;

    beforeEach(async(() => {
      service = new BlogService(POSTS);
    }));

    it('should create the blog service', () => {
      expect(service).toBeTruthy();
    });

    it('should return the reversed list of BlogPost with getBlogPostsInReverse', () => {
        const reversed = POSTS.slice().reverse();
        let posts: BlogPost[];
        service.getBlogPostsInReverse().subscribe(subVal => posts = subVal);
        expect(posts).toEqual(reversed);
      });
});
