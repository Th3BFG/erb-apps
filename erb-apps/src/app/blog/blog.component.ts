import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blogpost';
import { BlogService } from '../services/blog/blog.service';
import { ModalService } from '../services/modal/modal.service';
import { PostEditorComponent } from './post-editor/post-editor.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  _page = 1;
  _blogPosts: BlogPost[];
  _title = 'Welcome to ERB Applications';
  _subtitle = 'Down To Earth Solutions';

  constructor(private blogService: BlogService,
              private modalService: ModalService) { }

  ngOnInit(): void {
    this.getBlogPostsForDisplay();
  }

  createPost(): void {
    // TODO: Consider inputs
    this.modalService.init(PostEditorComponent, {}, {});
  }

  onSelect(post: BlogPost): void {
    console.log(post.subject);
  }

  getBlogPostsForDisplay(): void {
    this.blogService.getAllBlogPosts()
      .subscribe(posts => this._blogPosts = posts.reverse());
  }
}
