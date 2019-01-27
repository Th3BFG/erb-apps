import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogpost';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less'],
})
export class CreatePostComponent implements OnInit {
  blogPost: BlogPost;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(subject: string, body: string): void {
    this.blogPost = { dateposted: new Date('2019-01-01'),
                    poster: 'Ben', // TODO: Need User from auth
                    subject: subject,
                    body: body };
    this.blogService.insertBlogPost(this.blogPost).subscribe();
    alert('Post created');
    this.router.navigate(['blog']);
  }
}
