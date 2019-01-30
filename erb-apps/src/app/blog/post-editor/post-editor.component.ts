import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blogpost';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.less'],
})
export class PostEditorComponent implements OnInit {
  blogPost: BlogPost;

  constructor(private blogService: BlogService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(subject: string, body: string): void {
    this.blogPost = { dateposted: new Date('2019-01-01'), // TODO: need actual date. Here or let DB do it?
                    poster: 'Ben', // TODO: Need User from auth
                    subject: subject,
                    body: body };
    this.blogService.insertBlogPost(this.blogPost)
      .subscribe(o => this.disposeAndRefresh());
  }

  cancel(): void {
    this.modalService.dispose();
  }

  disposeAndRefresh(): void {
    this.modalService.dispose();
    // TODO: Get better method of refreshing posts.
    //this.router.navigate(['blog'])
  }
}
