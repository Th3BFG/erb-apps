import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[];
  title = 'Welcome to ERB Applications';
  subtitle = 'Down To Earth Solutions';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogPostsForDisplay();
  }

  onSelect(post: BlogPost): void {
    throw new Error('Method not implemented.');
  }

  getBlogPostsForDisplay(): void {
    this.blogService.getBlogPostsInReverse()
      .subscribe(posts => this.blogPosts = posts);
  }
}
