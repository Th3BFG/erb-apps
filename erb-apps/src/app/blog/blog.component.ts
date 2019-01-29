import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
})
export class BlogComponent implements OnInit {
  page = 1;
  blogPosts: BlogPost[];
  title = 'Welcome to ERB Applications';
  subtitle = 'Down To Earth Solutions';

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.getBlogPostsForDisplay();
  }

  createPost(): void {
    // TODO: Open new page, but this should be a modal
    this.router.navigate(['post']);
  }

  onSelect(post: BlogPost): void {
    console.log(post.subject);
  }

  getBlogPostsForDisplay(): void {
    this.blogService.getAllBlogPosts()
      .subscribe(posts => this.blogPosts = posts.reverse());
  }
}
